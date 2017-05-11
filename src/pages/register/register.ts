import {Component} from '@angular/core';
import {IonicPage, NavController, ToastController} from 'ionic-angular';

/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class Register {

    constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    }

    presentToast() {
        let toast = this.toastCtrl.create({
            message: 'User logged in successfully',
            duration: 3000
        });
        toast.present();
    }

    doRegister() {
        this.presentToast();
        this.navCtrl.setRoot('Tabs');
    }

}
