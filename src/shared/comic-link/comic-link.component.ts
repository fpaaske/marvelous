import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { MarvelComic } from "~/marvel-api";
import { LinkLabelComponent } from "~/shared/link-label/link-label.component";

@Component({
  selector: "app-comic-link",
  templateUrl: "./comic-link.component.html",
  styleUrls: ["./comic-link.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComicLinkComponent
  extends LinkLabelComponent
  implements OnChanges
{
  @Input() comic: MarvelComic;
  @Input() comicResourceUri: string;
  @Input() text: string;
  link: [string, number];

  ngOnChanges(changes: SimpleChanges) {
    let id;
    if (changes.comic?.currentValue) {
      const value: MarvelComic = changes.comic.currentValue;
      id = value.id;
    } else if (changes.comicResourceUri?.currentValue) {
      const value: string = changes.comicResourceUri.currentValue;
      id = +value.substring(value.lastIndexOf("/") + 1);
    }
    this.link = ["../comic", id];
  }
}
