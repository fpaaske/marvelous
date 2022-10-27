import { Component } from "@angular/core";
import {
  AndroidActivityBackPressedEventData,
  AndroidApplication,
  Application,
  isAndroid,
} from "@nativescript/core";
import { RouterExtensions } from "@nativescript/angular";
import { NavigationService } from "~/shared/services/navigation.service";
import { tap } from "rxjs";
import Theme from "@nativescript/theme";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  private currentOutlet: string;

  constructor(
    private routerExtensions: RouterExtensions,
    private navigationService: NavigationService
  ) {
    Theme.setMode(Theme.Auto);

    navigationService.currentOutlet$
      .pipe(tap((index) => (this.currentOutlet = index)))
      .subscribe();

    if (isAndroid) {
      Application.android.on(
        AndroidApplication.activityBackPressedEvent,
        this.handleBackPressedEvent,
        this
      );
      Application.android.on(
        AndroidApplication.activityPausedEvent,
        this.unregisterListeners,
        this
      );
    }
  }

  private unregisterListeners() {
    console.log("AppComponent::unregisterListeners");
    Application.android.off(AndroidApplication.activityBackPressedEvent);
    Application.android.off(AndroidApplication.activityPausedEvent);
  }

  private handleBackPressedEvent(args: AndroidActivityBackPressedEventData) {
    args.cancel = true; // handle back navigation manually
    const backNavigationOptions = {
      outlets: [this.currentOutlet],
    };
    const canGoBack = this.routerExtensions?.canGoBack(backNavigationOptions);
    console.log("AppComponent::handleBackPressedEvent", canGoBack);
    if (canGoBack) {
      this.routerExtensions.back(backNavigationOptions);
    } else {
      Application.android.foregroundActivity.moveTaskToBack(true);
    }
  }
}
