import { loadManifest } from '@angular-architects/module-federation';
import { NgZone } from '@angular/core';
import { createApplication } from '@angular/platform-browser';
// import { WebComponentWrapperComponent } from '@features/web-component-wrapper/web-component-wrapper.component';

loadManifest('assets/mf.manifest.json')
  .catch((err) => console.error('Error loading remote entries', err))
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));

// (async () => {
//   const app = await createApplication({
//     providers: [
//       /* your global providers here */
//     ],
//   });
//
//   app.injector.get(NgZone).run(() => {
//     app.bootstrap(WebComponentWrapperComponent);
//   });
// })();
