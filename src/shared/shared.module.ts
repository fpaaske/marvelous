import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptCommonModule,
  NativeScriptFormsModule,
  NativeScriptHttpClientModule,
  NativeScriptRouterModule,
} from "@nativescript/angular";
import { CollectionViewModule } from "@nativescript-community/ui-collectionview/angular";
import { MarvelImageUrlPipe } from "./marvel-image-url.pipe";
import { DetailViewComponent } from "./detail-view/detail-view.component";
import { ListItemComponent } from "./list-item/list-item.component";
import { CharacterLinkComponent } from "./character-link/character-link.component";
import { LinkLabelComponent } from "./link-label/link-label.component";
import { StoryLinkComponent } from "./story-link/story-link.component";
import { EventLinkComponent } from "./event-link/event-link.component";
import { SeriesLinkComponent } from "./series-link/series-link.component";
import { ComicLinkComponent } from "./comic-link/comic-link.component";
import { CreatorLinkComponent } from "./creator-link/creator-link.component";
import { SectionViewComponent } from "./section-view/section-view.component";

const MODULES = [
  NativeScriptCommonModule,
  NativeScriptFormsModule,
  NativeScriptRouterModule,
  NativeScriptHttpClientModule,
  CollectionViewModule,
];

const PIPES = [MarvelImageUrlPipe];

const COMPONENTS = [
  ListItemComponent,
  DetailViewComponent,
  SectionViewComponent,
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
