import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { CharacterComponent } from "./character.component";
import { SharedModule } from "~/shared/shared.module";
import { NativeScriptMaterialTabsModule } from "@nativescript-community/ui-material-tabs/angular";

export const MODULE_COMPONENTS = [CharacterComponent];

export const routes: Routes = [
  {
    path: ":id",
    component: CharacterComponent,
  },
  {
    path: "series",
    loadChildren: () =>
      import("~/features/series/series.module").then((m) => m.SeriesModule),
  },
  {
    path: "comic",
    loadChildren: () =>
      import("~/features/comic/comic.module").then((m) => m.ComicModule),
  },
  {
    path: "story",
    loadChildren: () =>
      import("~/features/story/story.module").then((m) => m.StoryModule),
  },
  {
    path: "creator",
    loadChildren: () =>
      import("~/features/creator/creator.module").then((m) => m.CreatorModule),
  }
];

@NgModule({
  imports: [
    SharedModule,
    NativeScriptMaterialTabsModule,
    NativeScriptRouterModule.forChild(routes),
  ],
  declarations: [...MODULE_COMPONENTS],
  exports: [...MODULE_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class CharacterModule {}
