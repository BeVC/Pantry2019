import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './core/ui/page-not-found/page-not-found.component';

const routes: Routes = [

    //{
    //    path: "foodlist",
    //    loadChildren: "./pantry/pantry.module#PantryModule"
    //},
    {
        path: '',
        redirectTo: 'foodlist',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
