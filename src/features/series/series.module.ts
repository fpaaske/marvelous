import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { SharedModule } from "~/shared/shared.module";
import { SeriesComponent } from "./series.component";

export const MODULE_COMPONENTS = [SeriesComponent];

export const routes: Routes = [
  {
    path: ":id",
    component: SeriesComponent,
    children: [],
  },
  {
    path: "character",
    loadChildren: () =>
      import("~/features/character/character.module").then(
        (m) => m.CharacterModule
      ),
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
  },
];

@NgModule({
  imports: [SharedModule, NativeScriptRouterModule.forChild(routes)],
  declarations: [...MODULE_COMPONENTS],
  exports: [...MODULE_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class SeriesModule {}
