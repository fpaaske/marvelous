import { Injectable } from "@angular/core";
import { BehaviorSubject, distinctUntilChanged, filter } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NavigationService {
  private currentOutlet = new BehaviorSubject<string>(null);
  currentOutlet$ = this.currentOutlet.pipe(
    filter((o) => !!o),
    distinctUntilChanged()
  );

  setCurrentOutlet(name: string) {
    this.currentOutlet.next(name);
  }
}
