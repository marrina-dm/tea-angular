import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductDescriptionPipe} from "./pipes/product-description.pipe";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    ProductDescriptionPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProductDescriptionPipe
  ]
})
export class SharedModule { }
