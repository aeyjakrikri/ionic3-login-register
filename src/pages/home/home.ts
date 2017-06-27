import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {IonicPage} from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class Home implements OnInit {
    constructor(public navCtrl: NavController) {

    }

    ngOnInit(): any {
    }
}
