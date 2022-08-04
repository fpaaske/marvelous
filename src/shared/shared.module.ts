import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptCommonModule,
  NativeScriptFormsModule,
  NativeScriptHttpClientModule,
  NativeScriptRouterModule,
} from "@nativescript/angular";
import { NativeScriptMaterialBottomNavigationModule } from "@nativescript-community/ui-material-bottom-navigation/angular";
import { MarvelImageUrlPipe } from "./image-url.directive";
import { CollectionViewModule } from "@nativescript-community/ui-collectionview/angular";
import { DetailViewComponent } from "./detail-view/detail-view.component";
import { ListItemComponent } from "./list-item/list-item.component";
import { CharacterLinkComponent } from "~/shared/character-link/character-link.component";
import { LinkLabelComponent } from "~/shared/link-label/link-label.component";
import { StoryLinkComponent } from "~/shared/story-link/story-link.component";
import { EventLinkComponent } from "~/shared/event-link/event-link.component";
import { SeriesLinkComponent } from "~/shared/series-link/series-link.component";
import { ComicLinkComponent } from "~/shared/comic-link/comic-link.component";
import { CreatorLinkComponent } from "~/shared/creator-link/creator-link.component";

const MODULES = [
  NativeScriptCommonModule,
  NativeScriptFormsModule,
  NativeScriptRouterModule,
  NativeScriptHttpClientModule,
  NativeScriptMaterialBottomNavigationModule,
  CollectionViewModule,
];

const PIPES = [MarvelImageUrlPipe];

const COMPONENTS = [
  ListItemComponent,
  DetailViewComponent,
  LinkLabelComponent,
  CharacterLinkComponent,
  SeriesLinkComponent,
  ComicLinkComponent,
  StoryLinkComponent,
  EventLinkComponent,
  CreatorLinkComponent,
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES, ...PIPES, ...COMPONENTS],
  declarations: [...PIPES, ...COMPONENTS],
  providers: [...PIPES],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule {}
