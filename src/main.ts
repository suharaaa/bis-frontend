<<<<<<< HEAD
import 'hammerjs';
=======
>>>>>>> b5f77a274e5e1e24df4b9ae298a045d29a1a3b43
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
