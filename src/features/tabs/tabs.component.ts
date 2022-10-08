import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { ActivatedRoute } from "@angular/router";
import { Page } from "@nativescript/core";
import { TabReselectedEventData, TabSelectedEventData } from "@nativescript-community/ui-material-bottomnavigationbar";
import { NavigationService } from "../../shared/services/navigation.service";
import Theme from "@nativescript/theme";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html"
})
export class TabsComponent implements OnInit {
  private outletMap: {[i: number]: string} = {
    0: 'charactersTab',
    1: 'seriesTab'
  }
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
    this.routerExtensions.navigate(
      [
        {
          outlets: {
            charactersTab: ["characters"],
            seriesTab: ["series"],
          },
        },
      ],
      { relativeTo: this.activatedRoute }
    ).then(() => console.log('Navigated outlets'));
  }

  tabSelected($event: TabSelectedEventData) {
    this.selectedTabIndex = $event.newIndex;
    this.navigationService.setCurrentOutlet(this.outletMap[this.selectedTabIndex]);
  }

  tabReselected($event: TabReselectedEventData) {
    Theme.toggleMode();
  }
}
