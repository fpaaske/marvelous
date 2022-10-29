import { Component, ViewChild } from "@angular/core";
import { PageRouterOutlet } from "@nativescript/angular";
import { Page } from "@nativescript/core/ui/page";

@Component({
  selector: "wrapped-empty-outlet-component",
  template: ` <GridLayout>
    <page-router-outlet isEmptyOutlet="true"></page-router-outlet>
  </GridLayout>`,
})
export class WrappedEmptyOutletComponentComponent {
  @ViewChild(PageRouterOutlet, { read: PageRouterOutlet, static: false })
  pageRouterOutlet: PageRouterOutlet;

  constructor(private page: Page) {
    console.log("[WrappedEmptyOutletComponent] constructor");
    // if (this.page) {
    //   this.page.actionBarHidden = true;
    //
    //   this.page.on("loaded", () => {
    //     if (this.pageRouterOutlet && this.page.frame) {
    //       this.pageRouterOutlet.setActionBarVisibility(
    //         this.page.frame.actionBarVisibility
    //       );
    //     }
    //   });
    // }
  }
}
