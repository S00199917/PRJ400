import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './main/base/base.component';
import { DeviceComponent } from './main/device/device.component';

import { NgChartsModule } from 'ng2-charts';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { Environments } from './environments/environments';
import { LoginComponent } from './Auth/login/login.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    DeviceComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    NgChartsModule,
    AngularFireModule.initializeApp(Environments.firebase.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
