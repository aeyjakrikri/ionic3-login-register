import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MainApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { RestProvider } from '../providers/rest/rest';
import { RestangularModule } from 'ngx-restangular';

@NgModule({
    declarations: [
        MainApp
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MainApp),
        RestangularModule.forRoot((RestangularProvider) => {
            RestangularProvider.setBaseUrl(RestProvider.BASE_URL);
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MainApp
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        AuthProvider,
        RestProvider
    ]
})
export class AppModule {
}
