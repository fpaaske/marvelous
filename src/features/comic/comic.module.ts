import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { SharedModule } from "~/shared/shared.module";
import { ComicComponent } from "./comic.component";

export const MODULE_COMPONENTS = [ComicComponent];

export const routes: Routes = [
  {
    path: ":id",
    component: ComicComponent,
  },
  {
    path: "series",
    loadChildren: () =>
      import("~/features/series/series.module").then((m) => m.SeriesModule),
  },
  {
    path: "character",
    loadChildren: () =>
      import("~/features/character/character.module").then(
        (m) => m.CharacterModule
      ),
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
  },
];

@NgModule({
  imports: [SharedModule, NativeScriptRouterModule.forChild(routes)],
  declarations: [...MODULE_COMPONENTS],
  exports: [...MODULE_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class ComicModule {}
