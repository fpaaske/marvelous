import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from "@angular/core";
import {
  DocspublicService,
  MarvelCreator,
  MarvelCreatorDataWrapper,
} from "../../marvel-api";
import { ActivatedRoute } from "@angular/router";
import { tap } from "rxjs";

@Component({
  templateUrl: "./creator.component.html",
  styleUrls: ["./creator.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatorComponent implements AfterViewInit {
  attributionText: string;
  creator: MarvelCreator;
  private readonly creatorId: number;

  constructor(
    activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private api: DocspublicService
  ) {
    this.creatorId = activatedRoute.snapshot.params["id"];
    console.log("creator id", this.creatorId);
  }

  ngAfterViewInit() {
    this.api
      .getCreatorIndividual(this.creatorId)
      .pipe(
        tap((result: MarvelCreatorDataWrapper) => {
          this.creator = result.data.results[0];
          this.attributionText = result.attributionText;
          this.cdr.markForCheck();
        })
      )
      .subscribe();
  }
}
