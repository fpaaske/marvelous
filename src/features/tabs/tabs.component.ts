import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { ActivatedRoute } from "@angular/router";
import { NavigationService } from "../../shared/services/navigation.service";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
})
export class TabsComponent implements OnInit {
  private outletMap: { [i: number]: { outlet: string; defaultRoute: string } } =
    {
      0: { outlet: "charactersTab", defaultRoute: "characters" },
      1: { outlet: "seriesTab", defaultRoute: "series" },
    };
  selectedTabIndex = 0;

  constructor(
    private routerExtensions: RouterExtensions,
    private activatedRoute: ActivatedRoute,
    private navigationService: NavigationService
  ) {}

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
          this.outletMap[this.selectedTabIndex].outlet
        );
        console.log("Navigated outlets");
      });
  }

  tabSelected(index: number) {
    const currentOutlet = this.outletMap[this.selectedTabIndex];
    if (this.selectedTabIndex !== index) {
      this.selectedTabIndex = index;
      this.navigationService.setCurrentOutlet(currentOutlet.outlet);
    } else {
      const outlets = {};
      outlets[currentOutlet.outlet] = [currentOutlet.defaultRoute];
      console.log("Navigating home", outlets);
      this.routerExtensions
        .navigate(
          [
            {
              outlets,
            },
          ],
          {
            relativeTo: this.activatedRoute,
            clearHistory: true,
          }
        )
        .then(() => console.log("Navigated home"));
    }
  }
}
