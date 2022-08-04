import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { MarvelImage, MarvelSeries } from "../../marvel-api";

@Component({
  selector: "app-series-link",
  templateUrl: "./series-link.component.html",
  styleUrls: ["./series-link.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeriesLinkComponent implements OnChanges {
  @Input() series: MarvelSeries;
  @Input() seriesResourceUri: string;
  @Input() text: string;
  link: [string, number];

  ngOnChanges(changes: SimpleChanges) {
    let id;
    if (changes.series?.currentValue) {
      const value: MarvelSeries = changes.series.currentValue;
      id = value.id;
    } else if (changes.seriesResourceUri?.currentValue) {
      const value: string = changes.seriesResourceUri.currentValue;
      id = +value.substring(value.lastIndexOf("/") + 1);
    }
    this.link = ["../series", id];
  }
}
