import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';



@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TestModule { }
