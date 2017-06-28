import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';

@Component({
    templateUrl: 'app.html'
})
export class MainApp {
    rootPage: any = 'Login';

    constructor(// private translate: TranslateService,
        private platform: Platform,
        private statusBar: StatusBar,
        private splashScreen: SplashScreen,
        private network: Network) {

        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();

            network.onDisconnect().subscribe(() => {
                console.log('network was disconnected :-(');
            });

            network.onConnect().subscribe(() => {
                console.log('network connected!');
                setTimeout(() => {
                    if (this.network.type === 'wifi') {
                        console.log('we got a wifi connection, woohoo!');
                    }
                }, 3000);
            });
        });
    }

}
