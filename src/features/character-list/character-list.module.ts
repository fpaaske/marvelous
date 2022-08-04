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
import { CharacterListComponent } from "./character-list.component";

export const MODULE_COMPONENTS = [CharacterListComponent];

export const routes: Routes = [
  {
    path: "character-list",
    component: CharacterListComponent,
  },
  {
    path: "character",
    loadChildren: () =>
      import("~/features/character/character.module").then(
        (m) => m.CharacterModule
      ),
  },
];

@NgModule({
  imports: [SharedModule, NativeScriptRouterModule.forChild(routes)],
  declarations: [...MODULE_COMPONENTS],
  exports: [...MODULE_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class CharacterListModule {}
