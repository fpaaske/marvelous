import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { ActivatedRoute } from "@angular/router";
import { Page } from "@nativescript/core";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
})
export class TabsComponent implements OnInit {
  constructor(
    page: Page,
    private routerExtensions: RouterExtensions,
    private activatedRoute: ActivatedRoute
  ) {
    page.on(Page.navigatedFromEvent, () => {});
    page.actionBarHidden = true;
  }

  ngOnInit() {
    // this.routerExtensions.navigate(
    //   [
    //     {
    //       outlets: {
    //         charactersTab: ["characters"],
    //         seriesTab: ["series"],
    //       },
    //     },
    //   ],
    //   { relativeTo: this.activatedRoute }
    // );
  }
}
