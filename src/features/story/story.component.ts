import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from "@angular/core";
import {
  DocspublicService,
  MarvelStory,
  MarvelStoryDataWrapper,
} from "../../marvel-api";
import { ActivatedRoute } from "@angular/router";
import { tap } from "rxjs/operators";
import { Page } from "@nativescript/core";

@Component({
  templateUrl: "./story.component.html",
  styleUrls: ["./story.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryComponent implements AfterViewInit {
  attributionText: string;
  story: MarvelStory;
  private readonly storyId: number;

  constructor(
    page: Page,
    activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private api: DocspublicService
  ) {
    page.on(Page.navigatedFromEvent, () => {});
    this.storyId = activatedRoute.snapshot.params["id"];
    console.log("story id", this.storyId);
  }

  ngAfterViewInit() {
    this.api
      .getStoryIndividual(this.storyId)
      .pipe(
        tap((response: MarvelStoryDataWrapper) => {
          this.story = response.data.results[0];
          this.attributionText = response.attributionText;
          this.cdr.markForCheck();
        })
      )
      .subscribe();
  }
}
