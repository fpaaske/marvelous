import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { MarvelImage } from "../../marvel-api";
import { Image, ScrollEventData, ScrollView } from "@nativescript/core";

@Component({
  selector: "detail-view",
  templateUrl: "./detail-view.component.html",
  styleUrls: ["./detail-view.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailViewComponent {
  @Input() marvelImage: MarvelImage;
  @Input() title: string;
  @Input() description: string;
  @Input() attributionText: string;

  constructor() {}

  onScroll($event: ScrollEventData) {
    const scrollView = $event.object as ScrollView;
    const image = scrollView.page.getViewById<Image>("img");
    const scrollY = $event.scrollY;
    if (scrollY < 0) {
      const scrollAmount = Math.abs(scrollY);
      const scale = (scrollAmount + 400) / 400;
      image.scaleX = scale;
      image.scaleY = scale;
      image.translateY = scrollAmount / 2;
    } else {
      image.translateY = -1 * scrollY;
    }
  }
}
