import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Routes} from '@angular/router';
import {NativeScriptRouterModule} from '@nativescript/angular';

import {SharedModule} from '../shared/shared.module';
import {ComicComponent} from '../shared/comic/comic.component';
import {SeriesComponent} from '../shared/series/series.component';
import {SeriesListComponent} from './components/series-list.component';
import {CharactersListComponent} from '../shared/character-search-list/characters-list.component';

export const SERIES_COMPONENTS = [SeriesListComponent];

export const routes: Routes = [
  {
    path: 'default',
    component: SeriesListComponent
  },
  {
    path: 'series/:id',
    component: SeriesComponent,
  },
  {
    path: 'characters/:seriesId',
    component: CharactersListComponent,
  },
  {
    path: 'comic/:id',
    component: ComicComponent,
  }
];

@NgModule({
  imports: [SharedModule, NativeScriptRouterModule.forChild(routes)],
  declarations: [...SERIES_COMPONENTS],
  exports: [...SERIES_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class SeriesModule {}
