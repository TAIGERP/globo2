import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable  } from 'angularfire2';
import { CapturePage } from '../capture/capture';
import firebase from 'firebase';
import { AuthData } from '../../providers/auth-data';


/*
  Generated class for the Photofeed page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-photofeed',
  templateUrl: 'photofeed.html'
})
export class PhotofeedPage {

	public items: FirebaseListObservable<any[]>;
	public storage:any;
  public storage2:any;
	public image = [] ;
  public link:any;
  public item: any;
  public reference:string;
  public photo: any;
  public counter = 3;
  constructor(public navCtrl: NavController,public af: AngularFire,public param: NavParams,public ad:AuthData) {
  		 this.image = [];
       this.newfeed(0);
         this.photo = firebase.database().ref('/photo');

  		// this.newfeed(3);
      this.items = af.database.list('/photo', {preserveSnapshot: true
});
      // this.storage = this.storage = firebase.storage().ref('images/test.jpg');
      // this.storage.getDownloadURL().then(url => this.link = url);

      this.feeding();
      

      // for (let num of this.item) {
      //   this.newfeed2(num,r);
      //   r++;
      // }
      //this.link = this.param.get('photo');

  		
  	  	  	  // this.storage = firebase.storage().ref('Itachi/Itachi1.jpg');
  	  	  	  // this.storage.getDownloadURL().then(url => this.image[0] = url);
           //    this.storage = firebase.storage().ref('Itachi/Itachi2.jpg');  
           //    this.storage.getDownloadURL().then(url => this.image[1] = url);  


  }

feeding()
{
  this.counter = 3;
  this.items.subscribe(snapshots=> {
        snapshots.forEach(snapshot => {
         let test =  snapshot.child("image").val();
          this.reference = 'images/'+test+'.jpg';
          this.newfeed2(this.reference,this.counter);
          this.counter++;
        console.log(test);
        console.log(this.reference);
        console.log(this.counter +"counting");});
      
      this.counter=3});
}
  newfeed2(i:any,j:number)
  {
    this.storage = firebase.storage().ref(i);
    this.storage.getDownloadURL().then(url => this.image[j] = url);
  }
  newfeed(j:number=0) {
      let i = 'Itachi/Itachi1.jpg';
        this.storage = firebase.storage().ref(i);
        this.storage.getDownloadURL().then(url => this.image[j] = url);
        this.storage = firebase.storage().ref('Itachi/Itachi2.jpg');
        this.storage.getDownloadURL().then(url => this.image[j+1] = url);
        this.storage = firebase.storage().ref('Itachi/Itachi3.jpg');
        this.storage.getDownloadURL().then(url => this.image[j+2] = url);
  	  
  }
  Capture()  {
    this.navCtrl.push( CapturePage );
  }
    singoutdata() {
    this.ad.logoutUser();
  }

}
