import { Component, Input } from "@angular/core";

@Component({
  selector: "app-link-label",
  templateUrl: "./link-label.component.html",
  styleUrls: ["./link-label.component.scss"],
})
export class LinkLabelComponent {
  @Input() text: string;
  @Input() nsRouterLink: [string, number];
}
