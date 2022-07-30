import {NgModule, Optional, SkipSelf} from '@angular/core';
import {NativeScriptHttpClientModule, NativeScriptModule, throwIfAlreadyLoaded} from '@nativescript/angular';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {CustomInterceptor} from './custom.interceptor';

@NgModule({
  imports: [NativeScriptModule, NativeScriptHttpClientModule],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: CustomInterceptor
  }]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
      parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
