import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import firebase from 'firebase';



@Injectable()
export class AuthData {
	fireAuth: any;


public userProfile: any;

  constructor(public af: AngularFire) {
  	af.auth.subscribe( user => {
  		if(user) {
  			this.fireAuth= user.auth;
  			console.log(user);
  		}	
  	});
    this.userProfile = firebase.database().ref('/users');
  }
loginUser(newEmail: string, newPassword: string): any {
    return this.af.auth.login({ email: newEmail, password: newPassword });
}
resetPassword(email: string): any {
    return firebase.auth().sendPasswordResetEmail(email);
}
logoutUser(): any {
    return this.af.auth.logout();
}
signupUser(newEmail: string, newPassword: string,name:string, surname: string, usr: string, bday: string): any {
    return this.af.auth.createUser({ email: newEmail, password: newPassword }).then((newUser) => {
      this.userProfile.child(newUser.uid).set({
      User: usr,
      email: newEmail,
      Name: name,
      Surname: surname,
      BirthDay: bday
      });
    });


}

}
