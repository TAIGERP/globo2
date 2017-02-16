import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AuthData } from '../../providers/auth-data';

//import { AuthService } from '../../providers/auth-service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { PhotofeedPage } from '../photofeed/photofeed';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	  items: FirebaseListObservable<any[]>;
	  public email: any;
    public photo: any;
	  public pass: any;
  
  constructor(public navCtrl: NavController,public af: AngularFire,/*private _auth: AuthService,*/private ad: AuthData) {

  	this.items = af.database.list('/users');
    this.email = "";
    this.pass = "";
      this.photo = firebase.database().ref('/photo');

    this.photo.once("value")
  .then(function(snapshot) { 
     });

  console.log("the push key is : " + this.photo.push().key);
  }

photofeed(){
  this.navCtrl.push(PhotofeedPage);
}
  //  signInWithFacebook(): void {
  //   this._auth.signInWithFacebook()
  //     .then(() => this.onSignInSuccess());
  // }
  // singUp() {
  // 	this._auth.signUp(this.email, this.pass);
  // }
  // LogIn(email: string, password: string) {
  //   this._auth.LogIn(email, password);
  // }
  // singOut() {
  //   this._auth.LogOut();
  // }
  singoutdata() {
    this.ad.logoutUser();
  }

  // private onSignInSuccess(): void {    
  //   console.log("Facebook display name ",this._auth.displayName());
  // }

}
