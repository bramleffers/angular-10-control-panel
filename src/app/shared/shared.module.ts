import { FlexwhereModule } from './flexwhere/flexwhere.module';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    FlexwhereModule
  ],
  exports: [
    MaterialModule,
    FlexwhereModule
  ]
})
export class SharedModule { }
