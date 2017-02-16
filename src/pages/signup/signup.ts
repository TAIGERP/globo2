import {
    NavController,
    LoadingController,
    AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { AuthData } from '../../providers/auth-data';
import { HomePage } from '../home/home';
import { PhotofeedPage } from '../photofeed/photofeed';
/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
	
    email:any;
    pass:any;
    loading;
    usr:any;
    name:any;
    surname:any;
    bday:any;

  constructor(public nav: NavController, public authData: AuthData, public loadingCtrl: LoadingController,
      public alertCtrl: AlertController) {
  }

  signupUser(){

          this.authData.signupUser(this.email,this.pass,this.name,this.surname,this.usr,this.bday).then(() => {
                  this.nav.setRoot(PhotofeedPage);
              }, (error) => {
                  this.loading.dismiss().then( () => {
                      var errorMessage: string = error.message;
                      let alert = this.alertCtrl.create({
                          message: errorMessage,
                          buttons: [{ text: "Ok",   role: 'cancel' } ]
                      });

                      alert.present();
                  });
              });

          this.loading = this.loadingCtrl.create({
              dismissOnPageChange: true,
          });

          this.loading.present();

      
  }

 

}
