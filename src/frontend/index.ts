import { enableProdMode, importProvidersFrom } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { RouteReuseStrategy, provideRouter } from '@angular/router'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular'

import { JogadorService, JogoService, AppService, CacheService, ApiService } from 'services'
import { IndexComponent, routes } from 'pages'

import environment from './environments'
import './extensions'

if (environment.production) enableProdMode()

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

bootstrapApplication(IndexComponent, { providers });
