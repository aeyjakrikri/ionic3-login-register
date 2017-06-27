import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {ResourceModule} from 'ngx-resource';
import {MainApp} from './app.component';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {RestService} from '../providers/rest.service';

@NgModule({
    declarations: [
        MainApp
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MainApp),
        ResourceModule.forRoot()
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MainApp
    ],
    providers: [
        StatusBar,
        SplashScreen,
        RestService,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
