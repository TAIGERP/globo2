import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from 'ionic-native';
//import { PhotofeedPage } from '../photofeed/photofeed';
import { AngularFire, FirebaseListObservable  } from 'angularfire2';
import firebase from 'firebase';
//import { CameraPreview } from 'ionic-native';
//import { PhotofeedPage } from '../photofeed/photofeed';

/*
  Generated class for the Capture page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-capture',
  templateUrl: 'capture.html'
})
export class CapturePage {


	public base64Image: string;
	public photo:any;
	public items : FirebaseListObservable<any[]>;
	public value: any;
	
  constructor(public navCtrl: NavController,public af: AngularFire) {
	
	this.photo = firebase.database().ref('/photo');
	this.items = af.database.list('/photo', {preserveSnapshot: true
});


		
		this.takePhoto();
  }
  takePhoto()
  {
  		Camera.getPicture({
  		destinationType:  Camera.DestinationType.DATA_URL,
  		targetWidth: 1000,
  		targetHeight: 1000
  	}).then((imageData) => {
  		this.base64Image = "data:image/jpeg;base64," + imageData;
  		this.SavePhoto(imageData);
  		this.navCtrl.pop();
  		//this.navCtrl.push(PhotofeedPage,{ photo: this.base64Image});
  		  	}, (err) => {
  		console.log(err);
      this.navCtrl.pop();
  
  	});
  }

 SavePhoto(image:any){
//  let	uploadTask = firebase.storage().ref('/photo').child('jpg').putString(image, 'base64', {contentType:'image/jpg'});
// 	uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
//   function(snapshot) {
//     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//     var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     console.log('Upload is ' + progress + '% done');
//     switch (snapshot.state) {
//       case firebase.storage.TaskState.PAUSED: // or 'paused'
//         console.log('Upload is paused');
//         break;
//       case firebase.storage.TaskState.RUNNING: // or 'running'
//         console.log('Upload is running');
//         break;
//     }
//   }, function(error) {
//     console.log(error);
// }, function() {
//   // Upload completed successfully, now we can get the download URL
//   var downloadURL = uploadTask.snapshot.downloadURL;
//   this.navCtrl.push(PhotofeedPage,{ photo: this.downloadURL});

// });
//let id = this.photo.orderByChild('imageid').limitToLast(1).val() + 1;
let reference;
let str2= '';


		str2 = this.photo.push().key;
 		 reference = 'images/'+ str2 +'.jpg';
		
 

var uploadTask = firebase.storage().ref().child(reference).putString(image, 'base64', {contentType: 'image/png'}).then(() => {
this.photo.push({
	image: str2});

 

});

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion

 }

}
