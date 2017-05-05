import {NgModule} from '@angular/core';
import {Tabs} from './tabs';
import {IonicPageModule} from 'ionic-angular';

@NgModule({
    declarations: [
        Tabs
    ],
    imports: [
        IonicPageModule.forChild(Tabs)
    ],
})

export class TabsModule {
}
