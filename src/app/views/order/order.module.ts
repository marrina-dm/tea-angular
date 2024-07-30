import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import {OrderComponent} from "./order.component";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    OrderRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    OrderRoutingModule
  ]
})
export class OrderModule { }
