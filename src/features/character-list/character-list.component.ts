import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from "@angular/core";
import { ObservableArray, SearchBar } from "@nativescript/core";
import { tap } from "rxjs/operators";
import {
  DocspublicService,
  MarvelCharacter,
  MarvelCharacterDataWrapper,
} from "../../marvel-api";

@Component({
  selector: "app-character-list",
  templateUrl: "./character-list.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterListComponent implements AfterViewInit {
  searchString: string;

  characters: ObservableArray<MarvelCharacter> =
    new ObservableArray<MarvelCharacter>();

  constructor(private api: DocspublicService) {}

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
          this.characters.push(...response.data.results);
        })
      )
      .subscribe();
  }
}
