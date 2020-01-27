import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CaptorsComponent } from './captors/captors.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule, MatSliderModule, MatTabsModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { ConfigurationComponent } from './configuration/configuration.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';
import {AngularFirestore} from '@angular/fire/firestore';
import {NgxGaugeModule} from 'ngx-gauge';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CaptorsComponent,
    ConfigurationComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatTabsModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule,
        MatChipsModule,
        NgxGaugeModule,
        MatSliderModule
    ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
