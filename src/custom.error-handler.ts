import {ErrorHandler} from '@angular/core';

export class CustomErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.error('Uncaught error', error);
  }
}
