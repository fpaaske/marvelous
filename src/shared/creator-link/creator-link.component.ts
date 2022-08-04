import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { MarvelCreator, MarvelStory } from "~/marvel-api";
import { LinkLabelComponent } from "~/shared/link-label/link-label.component";

@Component({
  selector: "app-creator-link",
  templateUrl: "./creator-link.component.html",
  styleUrls: ["./creator-link.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatorLinkComponent
  extends LinkLabelComponent
  implements OnChanges
{
  @Input() creator: MarvelCreator;
  @Input() creatorResourceUri: string;
  @Input() text: string;
  link: [string, number];

  ngOnChanges(changes: SimpleChanges) {
    let id;
    if (changes.creator?.currentValue) {
      const value: MarvelStory = changes.creator.currentValue;
      id = value.id;
    } else if (changes.creatorResourceUri?.currentValue) {
      const value: string = changes.creatorResourceUri.currentValue;
      id = +value.substring(value.lastIndexOf("/") + 1);
    }
    this.link = ["../creator", id];
  }
}
