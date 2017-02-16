import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { LoginPage } from '../pages/login/login';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { SignupPage } from '../pages/signup/signup';
import { CapturePage } from '../pages/capture/capture';
import { AuthData } from '../providers/auth-data';
//import { AuthService } from '../providers/auth-service';
import firebase from 'firebase';

import { AngularFireModule, AuthProviders, AuthMethods  } from 'angularfire2';

import { PhotofeedPage } from '../pages/photofeed/photofeed';

export const firebaseConfig = {
  apiKey: "AIzaSyDcb6xX51Agm10XinpkGfmIKylEggCiKQc",
  authDomain: "photofeed-c6ca1.firebaseapp.com",
  databaseURL: "https://photofeed-c6ca1.firebaseio.com",
  storageBucket: "photofeed-c6ca1.appspot.com",
  messagingSenderId: "999634224684"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

firebase.initializeApp(firebaseConfig);



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ResetPasswordPage,
    PhotofeedPage,
    CapturePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ResetPasswordPage,
    PhotofeedPage,
    CapturePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AuthData]
})
export class AppModule {}
