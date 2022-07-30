// angular
import {NgModule} from '@angular/core';
import {Routes} from '@angular/router';

// nativescript
import {NativeScriptRouterModule, NSEmptyOutletComponent} from '@nativescript/angular';

// app
import {SharedModule} from './features/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/(charactersTab:characters/default//seriesTab:series/default)',
    pathMatch: 'full'
  },
  {
    path: 'characters',
    component: NSEmptyOutletComponent,
    loadChildren: () => import('./features/characters/characters.module').then(m => m.CharactersModule),
    outlet: 'charactersTab'
  },
  {
    path: 'series',
    component: NSEmptyOutletComponent,
    loadChildren: () => import('./features/series/series.module').then(m => m.SeriesModule),
    outlet: 'seriesTab'
  }
];

@NgModule({
  imports: [SharedModule, NativeScriptRouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
