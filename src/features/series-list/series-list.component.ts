import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from "@angular/core";
import {
  DocspublicService,
  MarvelSeries,
  MarvelSeriesDataWrapper,
} from "../../marvel-api";
import { tap } from "rxjs/operators";
import { ItemEventData, ObservableArray, SearchBar } from "@nativescript/core";

@Component({
  selector: "app-series-list",
  templateUrl: "./series-list.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeriesListComponent implements AfterViewInit {
  series: ObservableArray<MarvelSeries> = new ObservableArray<MarvelSeries>();
  private searchString: string;

  constructor(private api: DocspublicService) {}

  ngAfterViewInit() {
    this.loadMoreItems();
  }

  onSubmit(args) {
    const searchBar = args.object as SearchBar;
    console.log(`Searching for ${searchBar.text}`);
    this.series.length = 0;
    this.searchString = searchBar.text;
    this.loadMoreItems();
  }

  onTextChanged(args) {
    const searchBar = args.object as SearchBar;
    console.log(`Input changed! New value: ${searchBar.text}`);
  }

  onClear(args) {
    console.log(`Clear event raised`);
    this.searchString = "";
    this.series.length = 0;
    this.loadMoreItems();
  }

  itemTap($event: ItemEventData) {
    console.log($event.index, this.series[$event.index].title);
  }

  loadMoreItems() {
    const titleStartsWith = this.searchString ? this.searchString : undefined;
    const offset = this.series?.length;
    this.api
      .getSeriesCollection(
        undefined,
        titleStartsWith,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        offset
      )
      .pipe(
        tap((response: MarvelSeriesDataWrapper) => {
          this.series.push(...response.data.results);
        })
      )
      .subscribe();
  }
}
