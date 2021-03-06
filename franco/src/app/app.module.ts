import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MenuComponent } from './menu/menu.component';
import { IntroComponent } from './intro/intro.component';
import { PopisComponent } from './popis/popis.component';
import { PonukaComponent } from './ponuka/ponuka.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { BlokComponent } from './blok/blok.component';
import { BanerComponent } from './baner/baner.component';
import { DodatokComponent } from './dodatok/dodatok.component';
import { BootComponent } from './boot/boot.component';
import { RokComponent } from './rok/rok.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IntroComponent,
    PopisComponent,
    PonukaComponent,
    KontaktComponent,
    BlokComponent,
    BanerComponent,
    DodatokComponent,
    BootComponent,
    RokComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
