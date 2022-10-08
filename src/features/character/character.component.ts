import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  DocspublicService,
  MarvelCharacter,
  MarvelCharacterDataWrapper,
} from "../../marvel-api";
import { tap } from "rxjs/operators";
import { Page } from "@nativescript/core";

@Component({
  templateUrl: "./character.component.html",
  styleUrls: ["./character.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterComponent implements AfterViewInit {
  attributionText: string;
  character: MarvelCharacter;
  private readonly characterId: number;

  constructor(
    page: Page,
    activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private api: DocspublicService
  ) {
    page.on(Page.navigatedFromEvent, () => {});
    this.characterId = activatedRoute.snapshot.params["id"];
    console.log("character id", this.characterId);
  }

  ngAfterViewInit() {
    this.api
      .getCharacterIndividual(this.characterId)
      .pipe(
        tap((response: MarvelCharacterDataWrapper) => {
          this.character = response.data.results[0];
          this.attributionText = response.attributionText;
          this.cdr.markForCheck();
        })
      )
      .subscribe();
  }
}
