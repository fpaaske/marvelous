import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { SharedModule } from "~/shared/shared.module";
import { SeriesListComponent } from "./series-list.component";

export const MODULE_COMPONENTS = [SeriesListComponent];

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "series-list"
  },
  {
    path: "series-list",
    component: SeriesListComponent,
  },
  {
    path: "series",
    loadChildren: () =>
      import("~/features/series/series.module").then((m) => m.SeriesModule),
  },
];

@NgModule({
  imports: [SharedModule, NativeScriptRouterModule.forChild(routes)],
  declarations: [...MODULE_COMPONENTS],
  exports: [...MODULE_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class SeriesListModule {}
