import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { generateUUID } from "~/utils";

export class CustomInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const uuid = generateUUID().substring(0, 5);
    req = req.clone({
      params: req.params.set("apikey", process.env.MARVEL_API_KEY),
      headers: req.headers
        .set("Referer", process.env.MARVEL_API_REFERER)
        .set("Accept-Encoding", "gzip"),
    });

    console.log(`${uuid} Request:`, req.urlWithParams);
    return next.handle(req).pipe(
      tap((res: HttpEvent<any>) => {
        if (res.type === HttpEventType.Response) {
          console.log(
            `${uuid} Response:`,
            res.status,
            res.statusText,
            JSON.stringify(res.body)
          );
        }
      }),
      catchError((error) => {
        console.log(`${uuid} Error Response:`, JSON.stringify(error));
        return throwError(error);
      })
    );
  }
}
