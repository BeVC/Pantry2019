import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { PantryModule } from './pantry/pantry.module';
import { SharedModule } from './shared/shared.module';
//import { NavMenuComponent } from './nav-menu/nav-menu.component';
//import { HomeComponent } from './home/home.component';
//import { CounterComponent } from './counter/counter.component';
//import { FetchDataComponent } from './fetch-data/fetch-data.component';

@NgModule({
    declarations: [
        AppComponent,
        //NavMenuComponent,
        //HomeComponent,
        //CounterComponent,
        //FetchDataComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        CoreModule,
        SharedModule, 
        PantryModule,

        AppRoutingModule,
        //RouterModule.forRoot([
        //  { path: '', component: HomeComponent, pathMatch: 'full' },
        //  { path: 'counter', component: CounterComponent },
        //  { path: 'fetch-data', component: FetchDataComponent },
        //])
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
