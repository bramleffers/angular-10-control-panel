import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CcComponent } from './components/control-panel/cc.component';
import { Cc2Component } from './components/control-panel-v2/control-panel-v2.component';
import { FormComponent } from './components/form/form.component';
import { MockDataModule } from 'src/mock/mock-data.module';

@NgModule({ 
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, SharedModule, MockDataModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, CcComponent, Cc2Component, FormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
