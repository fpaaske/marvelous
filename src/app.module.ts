import {ErrorHandler, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CoreModule} from './core/core.module';
import {SharedModule} from './features/shared/shared.module';
import {AppRoutingModule} from './app.routing';
import {AppComponent} from './app.component';
import {ApiModule, BASE_PATH} from '~/marvel-api';
import {CustomErrorHandler} from '~/custom.error-handler';

@NgModule({
  imports: [CoreModule, SharedModule, AppRoutingModule, ApiModule],
  declarations: [AppComponent],
  providers: [{provide: BASE_PATH, useValue: 'https://gateway.marvel.com'}, {provide: ErrorHandler, useClass: CustomErrorHandler}],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
