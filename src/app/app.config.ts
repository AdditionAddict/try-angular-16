import {
  ApplicationConfig,
  NgZone,
  ɵNoopNgZone,
} from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    /**
     * Turn off zone.js
     */
    // {
    //   provide: NgZone,
    //   useClass: ɵNoopNgZone,
    // },
  ],
};
