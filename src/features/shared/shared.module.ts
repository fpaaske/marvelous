import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {
  NativeScriptCommonModule,
  NativeScriptFormsModule,
  NativeScriptHttpClientModule,
  NativeScriptRouterModule
} from '@nativescript/angular';
import {
  NativeScriptMaterialBottomNavigationModule
} from '@nativescript-community/ui-material-bottom-navigation/angular';
import {MarvelImageUrlPipe} from './image-url.directive';
import {CollectionViewModule} from '@nativescript-community/ui-collectionview/angular';
import {CharacterComponent} from './character/character.component';
import {ComicComponent} from './comic/comic.component';
import {SeriesComponent} from './series/series.component';
import {DetailViewComponent} from './detail-view/detail-view.component';
import {ListItemComponent} from './list-item/list-item.component';
import {CharactersListComponent} from './character-search-list/characters-list.component';

const MODULES = [
  NativeScriptCommonModule,
  NativeScriptFormsModule,
  NativeScriptRouterModule,
  NativeScriptHttpClientModule,
  NativeScriptMaterialBottomNavigationModule,
  CollectionViewModule
];

const PIPES = [
  MarvelImageUrlPipe
]

const COMPONENTS = [
  CharacterComponent,
  ComicComponent,
  SeriesComponent,
  ListItemComponent,
  DetailViewComponent,
  CharactersListComponent
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES, ...PIPES, ...COMPONENTS],
  declarations: [...PIPES, ...COMPONENTS],
  providers: [...PIPES],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule {}
