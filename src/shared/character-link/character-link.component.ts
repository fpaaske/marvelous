import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { MarvelCharacter } from "~/marvel-api";
import { LinkLabelComponent } from "~/shared/link-label/link-label.component";

@Component({
  selector: "app-character-link",
  templateUrl: "./character-link.component.html",
  styleUrls: ["./character-link.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterLinkComponent
  extends LinkLabelComponent
  implements OnChanges
{
  @Input() character: MarvelCharacter;
  @Input() characterResourceUri: string;
  @Input() text: string;
  link: [string, number];

  ngOnChanges(changes: SimpleChanges) {
    let id;
    if (changes.character?.currentValue) {
      const value: MarvelCharacter = changes.character.currentValue;
      id = value.id;
    } else if (changes.characterResourceUri?.currentValue) {
      const value: string = changes.characterResourceUri.currentValue;
      id = +value.substring(value.lastIndexOf("/") + 1);
    }
    this.link = ["../character", id];
  }
}
