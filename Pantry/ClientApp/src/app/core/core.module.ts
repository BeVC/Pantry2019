import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from './ui/navigation/navigation.component';
import { NavigationBrokerService } from './broker/navigation-broker.service';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';

@NgModule({
    declarations: [
        NavigationComponent,
        PageNotFoundComponent
    ],
    exports: [
        NavigationComponent,
        PageNotFoundComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        NavigationBrokerService
    ]
})
export class CoreModule { }
