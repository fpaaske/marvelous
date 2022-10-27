import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { Routes } from "@angular/router";
import {
  NativeScriptRouterModule,
  NSEmptyOutletComponent,
} from "@nativescript/angular";
import { SharedModule } from "~/shared/shared.module";
import { TabsComponent } from "./tabs.component";
import { CharacterListModule } from "../character-list/character-list.module";
import { SeriesListModule } from "../series-list/series-list.module";
import { NativeScriptMaterialBottomNavigationBarModule } from "@nativescript-community/ui-material-bottomnavigationbar/angular";

export const MODULE_COMPONENTS = [TabsComponent];

const routes: Routes = [
  {
    path: "default",
    component: TabsComponent,
    children: [
      {
        path: "characters",
        outlet: "charactersTab",
        component: NSEmptyOutletComponent,
        loadChildren: () =>
          import("~/features/character-list/character-list.module").then(
            (m) => m.CharacterListModule
          ),
      },
      {
        path: "series",
        outlet: "seriesTab",
        component: NSEmptyOutletComponent,
        loadChildren: () =>
          import("~/features/series-list/series-list.module").then(
            (m) => m.SeriesListModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    SharedModule,
    CharacterListModule,
    SeriesListModule,
    NativeScriptRouterModule.forChild(routes),
    NativeScriptMaterialBottomNavigationBarModule,
  ],
  declarations: [...MODULE_COMPONENTS],
  exports: [...MODULE_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class TabsModule {}
