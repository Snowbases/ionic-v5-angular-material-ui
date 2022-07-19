import { Injectable } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';

@Injectable()
export class HammerConfiguration extends HammerGestureConfig {
  overrides: any = {
    // override hammerjs default configuration
    swipe: { direction: Hammer.DIRECTION_ALL }
  };
}
