import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MainApp} from './app.component';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {UserService} from '../providers/user.service';


@NgModule({
    declarations: [
        MainApp
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MainApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MainApp
    ],
    providers: [
        UserService,
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
