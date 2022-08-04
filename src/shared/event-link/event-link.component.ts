import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { MarvelEvent } from "~/marvel-api";
import { LinkLabelComponent } from "~/shared/link-label/link-label.component";

@Component({
  selector: "app-event-link",
  templateUrl: "./event-link.component.html",
  styleUrls: ["./event-link.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventLinkComponent
  extends LinkLabelComponent
  implements OnChanges
{
  @Input() event: MarvelEvent;
  @Input() eventResourceUri: string;
  @Input() text: string;
  link: [string, number];

  ngOnChanges(changes: SimpleChanges) {
    let id;
    if (changes.event?.currentValue) {
      const value: MarvelEvent = changes.event.currentValue;
      id = value.id;
    } else if (changes.eventResourceUri?.currentValue) {
      const value: string = changes.eventResourceUri.currentValue;
      id = +value.substring(value.lastIndexOf("/") + 1);
    }
    this.link = ["../event", id];
  }
}
