import {Component} from '@angular/core';
import {IonicPage, NavController, ToastController} from 'ionic-angular';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class Login {

    constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    }

    goToRegister() {
        this.navCtrl.push('Register');
    }

    presentToast() {
        let toast = this.toastCtrl.create({
            message: 'User logged in successfully',
            duration: 3000
        });
        toast.present();
    }

    doLogin(){
        this.presentToast();
        this.navCtrl.setRoot('Tabs');
    }
}
