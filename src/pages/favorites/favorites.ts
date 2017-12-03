import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {
  favoritesList: Array<{code:string,name:string,uri:string}>;

  constructor(public navCtrl: AlertController) {
      this.favoritesList=[];
      this.favoritesList.push({code:'C1',name:'google',uri:'http://www.google.fr'});
      this.favoritesList.push({code:'C2',name:'Yahoooo',uri:'http://www.yahoo.fr'});      
  }


  doAlert() {
    let alert = this.navCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

  displayUri(favorite:{code:string,name:string,uri:string}) {
    let alert = this.navCtrl.create({
      title: favorite.name,
      subTitle: favorite.uri,
      buttons: [favorite.code]
    });
    alert.present();
  }

  showPrompt() {
    let prompt = this.navCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  showConfirm() {
    let confirm = this.navCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
}