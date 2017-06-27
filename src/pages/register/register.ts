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
    public user: {
        name: string,
        email: string,
        password: string
    };

    constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    }

    presentToast() {
        let toast = this.toastCtrl.create({
            message: 'User logged in successfully',
            duration: 3000,
            position: 'top'
        });

        toast.present().then(() => {
            console.log('Displayed');
        });
    }

    doRegister() {
        this.presentToast();
        this.navCtrl.setRoot('Tabs');
    }

}
