// angular
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

// nativescript
import { NativeScriptRouterModule } from "@nativescript/angular";

// app
import { SharedModule } from "~/shared/shared.module";

const routes: Routes = [
  {
    path: "",
    redirectTo: "tabs/default",
    pathMatch: "full",
  },
  {
    path: "tabs",
    loadChildren: () =>
      import("./features/tabs/tabs.module").then((m) => m.TabsModule),
  },
];

@NgModule({
  imports: [
    SharedModule,
    NativeScriptRouterModule.forRoot(routes, { enableTracing: true }),
  ],
})
export class AppRoutingModule {}
