import * as Hammer from 'hammerjs';

import { Injectable } from '@angular/core';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';

@Injectable()
export class HammerConfiguration extends HammerGestureConfig {
  overrides: any = {
    // override hammerjs default configuration
    swipe: { direction: Hammer.DIRECTION_ALL }
  };
}


