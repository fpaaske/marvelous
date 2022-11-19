import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { ActivatedRoute } from "@angular/router";
import { Page } from "@nativescript/core";
import { NavigationService } from "../../shared/services/navigation.service";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
})
export class TabsComponent implements OnInit {
  private outletMap: { [i: number]: string } = {
    0: "charactersTab",
    1: "seriesTab",
  };
  selectedTabIndex = 0;

  constructor(
    page: Page,
    private routerExtensions: RouterExtensions,
    private activatedRoute: ActivatedRoute,
    private navigationService: NavigationService
  ) {
    page.on(Page.navigatedFromEvent, () => {});
    page.actionBarHidden = true;
  }

  ngOnInit() {
    this.routerExtensions
      .navigate(
        [
          {
            outlets: {
              charactersTab: ["characters"],
              seriesTab: ["series"],
            },
          },
        ],
        { relativeTo: this.activatedRoute }
      )
      .then(() => {
        this.navigationService.setCurrentOutlet(
          this.outletMap[this.selectedTabIndex]
        );
        console.log("Navigated outlets");
      });
  }

  tabSelected(index: number) {
    this.selectedTabIndex = index;
    this.navigationService.setCurrentOutlet(
      this.outletMap[this.selectedTabIndex]
    );
  }
}
