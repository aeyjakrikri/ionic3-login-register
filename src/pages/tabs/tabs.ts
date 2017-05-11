import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

@IonicPage()
@Component({
    templateUrl: 'tabs.html'
})
export class Tabs {

    tab1Root = 'Home';

    constructor(public navCtrl: NavController) {

    }

    doLogout() {
        this.navCtrl.setRoot('Login');
    }
}
