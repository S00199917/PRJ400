import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './main/base/base.component';
import { DeviceComponent } from './main/device/device.component';
import { BaseComponent as DeviceBase } from './new/base/base.component';

import { NgChartsModule } from 'ng2-charts';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { Environments } from './environments/environments';
import { LoginComponent } from './auth/login/login.component';

import { BaseComponent as AuthBase } from './auth/base/base.component';
import { SignupComponent } from './auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    DeviceComponent,
    LoginComponent,
    AuthBase,
    SignupComponent,
    DeviceBase
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    NgChartsModule,
    AngularFireModule.initializeApp(Environments.firebase.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
