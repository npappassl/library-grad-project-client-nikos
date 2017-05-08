import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// TODO 
// When production
// import {enableProdMode} from '@angular/core';

import { AppModule } from './app/app.module';
// TODO
// When production
// enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
