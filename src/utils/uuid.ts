import {isIOS} from '@nativescript/core';

export function generateUUID(): string {
  if (isIOS) {
    return NSUUID.UUID().UUIDString.toLowerCase();
  } else {
    return java.util.UUID.randomUUID().toString().toLowerCase();
  }
}
