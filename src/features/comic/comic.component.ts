import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from "@angular/core";
import {
  DocspublicService,
  MarvelComic,
  MarvelComicDataWrapper,
} from "../../marvel-api";
import { ActivatedRoute } from "@angular/router";
import { tap } from "rxjs";

@Component({
  templateUrl: "./comic.component.html",
  styleUrls: ["./comic.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComicComponent implements AfterViewInit {
  attributionText: string;
  comic: MarvelComic;
  private readonly comicId: number;

  constructor(
    activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private api: DocspublicService
  ) {
    this.comicId = activatedRoute.snapshot.params["id"];
    console.log("comic id", this.comicId);
  }

  ngAfterViewInit() {
    this.api
      .getComicIndividual(this.comicId)
      .pipe(
        tap((result: MarvelComicDataWrapper) => {
          this.comic = result.data.results[0];
          this.attributionText = result.attributionText;
          this.cdr.markForCheck();
        })
      )
      .subscribe();
  }
}
