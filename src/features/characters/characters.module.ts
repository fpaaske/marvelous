import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Routes} from '@angular/router';
import {NativeScriptRouterModule} from '@nativescript/angular';

import {SharedModule} from '../shared/shared.module';
import {CharacterComponent} from '../shared/character/character.component';
import {CharactersSearchComponent} from './components/characters-search.component';

export const CHARACTERS_COMPONENTS = [CharactersSearchComponent];

export const routes: Routes = [
  {
    path: 'default',
    component: CharactersSearchComponent,
  },
  {
    path: 'character/:id',
    component: CharacterComponent,
  }
];

@NgModule({
  imports: [SharedModule, NativeScriptRouterModule.forChild(routes)],
  declarations: [...CHARACTERS_COMPONENTS],
  exports: [...CHARACTERS_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class CharactersModule {}
