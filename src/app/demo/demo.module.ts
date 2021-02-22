import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import {MaterialModule} from '../share/material.module';
import {FormsModule} from '@angular/forms';
import { FlexboxComponent } from './flexbox/flexbox.component';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [ButtonsComponent, FlexboxComponent],
  imports: [
    CommonModule,
    DemoRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,

  ]
})
export class DemoModule { }
