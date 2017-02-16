// import { Injectable } from '@angular/core';
// import { AngularFire, AuthProviders, FirebaseAuth, FirebaseAuthState, AuthMethods } from 'angularfire2';
// import { Platform } from 'ionic-angular';
// import { Facebook } from 'ionic-native';

// @Injectable()
// export class AuthService {
//   private authState: FirebaseAuthState;

//   constructor(public af: AngularFire,public auth$: FirebaseAuth,private platform: Platform) {
//     this.authState = auth$.getAuth();
//     auth$.subscribe((state: FirebaseAuthState) => {
//       this.authState = state;
//     });
//   }

//   get authenticated(): boolean {
//     return this.authState !== null;
//   }


//     signUp(email: string, password: string) {
//     var creds: any = {email: email, password: password};
//     this.af.auth.createUser(creds);
//   }

//     LogIn(email:string, password: string) {
//       this.af.auth.login({
//         email: email,
//         password: password
//       });
//     }
//     LogOut() {
//         this.af.auth.logout();
//       }


//   signInWithFacebook(): firebase.Promise<FirebaseAuthState> {
//     if (this.platform.is('cordova')) {
//       Facebook.login(['email', 'public_profile']).then(res => {
//         const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
//         return firebase.auth().signInWithCredential(facebookCredential);
//       });
//     } else {
//       return this.auth$.login({
//         provider: AuthProviders.Facebook,
//         method: AuthMethods.Popup
//       });
//     }

//   }
//   signOut(): void {
//     this.auth$.logout();
//   }
  

//   displayName(): string {
//     if (this.authState != null) {
//       return this.authState.facebook.displayName;
//     } else {
//       return '';
//     }
//   }  
// }