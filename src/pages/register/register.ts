import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { User } from '../../models/user';

@IonicPage()
@Component({
  templateUrl: 'register.html',
  selector: 'page-register',
})
export class RegisterPage {
  user = {} as User;

  constructor(
    private angularFireAuth: AngularFireAuth,
    public navParams: NavParams,
    public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  async doRegister(user: User) {
    try {
      const result = await this.angularFireAuth
                                .auth
                                .createUserWithEmailAndPassword(user.email, 
                                                                user.password);

      if (result) {
        this.clearFields();
      }
      
      console.log(result);
    } catch(error) {
      console.log(error);
    }
  }

  clearFields() {
    this.user.email = null;
    this.user.password = null;
  }

  async doClose() {
    try {
    const result =  await this.navCtrl
                              .setRoot('LoginPage');
      console.log(result);
    } catch(error) {
      console.log(error);
    }
  }

}
