import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PantryRoutingModule } from './pantry-routing.module';
import { FoodlistComponent } from './ui/foodlist/foodlist.component';

@NgModule({
  declarations: [FoodlistComponent],
  imports: [
    CommonModule,
    PantryRoutingModule
  ]
})
export class PantryModule { }
