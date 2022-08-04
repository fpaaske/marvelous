import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { MarvelStory } from "~/marvel-api";
import { LinkLabelComponent } from "~/shared/link-label/link-label.component";

@Component({
  selector: "app-story-link",
  templateUrl: "./story-link.component.html",
  styleUrls: ["./story-link.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryLinkComponent
  extends LinkLabelComponent
  implements OnChanges
{
  @Input() story: MarvelStory;
  @Input() storyResourceUri: string;
  @Input() text: string;
  link: [string, number];

  ngOnChanges(changes: SimpleChanges) {
    let id;
    if (changes.story?.currentValue) {
      const value: MarvelStory = changes.story.currentValue;
      id = value.id;
    } else if (changes.storyResourceUri?.currentValue) {
      const value: string = changes.storyResourceUri.currentValue;
      id = +value.substring(value.lastIndexOf("/") + 1);
    }
    this.link = ["../story", id];
  }
}
