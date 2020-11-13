import { FwCardComponent } from './card/card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [FwCardComponent, ButtonComponent],
  imports: [
    CommonModule
  ]
})
export class FlexwhereModule { }
