import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from "@angular/core";
import { Page, SearchBar } from "@nativescript/core";
import { tap } from "rxjs/operators";
import {
  DocspublicService,
  MarvelCharacter,
  MarvelCharacterDataWrapper,
} from "../../marvel-api";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-character-list",
  templateUrl: "./character-list.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterListComponent implements AfterViewInit {
  searchString: string;

  characters: Array<MarvelCharacter> = new Array<MarvelCharacter>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private api: DocspublicService
  ) {}

  onSubmit(args) {
    const searchBar = args.object as SearchBar;
    console.log(`Searching for ${searchBar.text}`);
    this.characters.length = 0;
    this.searchString = searchBar.text;
    this.loadMoreItems();
  }

  onClear(args) {
    console.log(`Clear event raised`);
    this.searchString = undefined;
    this.characters.length = 0;
    this.loadMoreItems();
  }

  ngAfterViewInit() {
    this.loadMoreItems();
  }

  loadMoreItems() {
    const offset = this.characters.length;
    this.api
      .getCreatorCollection_8(
        undefined,
        this.searchString,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        40,
        offset
      )
      .pipe(
        tap((response: MarvelCharacterDataWrapper) => {
          const marvelCharacters = response.data.results;
          console.log("Marvel Characters: " + marvelCharacters.length);
          this.characters.push(...marvelCharacters);
          this.cdr.markForCheck();
        })
      )
      .subscribe();
  }
}
