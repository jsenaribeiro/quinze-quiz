import { enableProdMode, importProvidersFrom } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { RouteReuseStrategy, provideRouter } from '@angular/router'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular'

import { routes } from './app/app.routes'
import { AppComponent } from './app/app.component'
import { environment } from './environments/environment'
import { JogadorService, JogoService, AppService, CacheService, ApiService } from 'services'

import './extensions'

if (environment.production) enableProdMode();

export class AppModule { }

const providers = [
   { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
   importProvidersFrom(IonicModule.forRoot({})),
   provideRouter(routes),
   CacheService,
   JogadorService,
   JogoService,
   AppService,
   ApiService,
]

bootstrapApplication(AppComponent, { providers });
