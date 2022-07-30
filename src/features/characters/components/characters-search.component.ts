import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SearchBar} from '@nativescript/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters-search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersSearchComponent {
  searchString: string;

  constructor() {
  }

  onSubmit(args) {
    const searchBar = args.object as SearchBar;
    console.log(`Searching for ${searchBar.text}`);
    this.searchString = searchBar.text;
  }

  onClear(args) {
    console.log(`Clear event raised`);
    this.searchString = undefined;
  }
}
