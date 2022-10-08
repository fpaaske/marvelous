import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "section-view",
  templateUrl: "./section-view.component.html",
  styleUrls: ["./section-view.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionViewComponent {
  @Input() title: string;
}
