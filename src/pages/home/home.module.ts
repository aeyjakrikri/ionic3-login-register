import {NgModule} from '@angular/core';
import {Home} from './home';
import {IonicPageModule} from 'ionic-angular';

@NgModule({
    declarations: [
        Home
    ],
    imports: [
        IonicPageModule.forChild(Home)
    ],
    providers: [
    ]
})

export class HomePageModule {
}
