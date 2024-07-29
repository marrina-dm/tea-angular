import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/common/header/header.component';
import {FooterComponent} from './components/common/footer/footer.component';
import {MainComponent} from './components/pages/main/main.component';
import {OrderComponent} from './components/pages/order/order.component';
import {ProductComponent} from './components/pages/product/product.component';
import {ProductsComponent} from './components/pages/products/products.component';
import {ProductDescriptionPipe} from './pipes/product-description.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductService} from "./services/product.service";
import {OrderService} from "./services/order.service";
import {provideHttpClient} from "@angular/common/http";
import {RouterLink, RouterLinkActive, RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    OrderComponent,
    ProductComponent,
    ProductsComponent,
    ProductDescriptionPipe
  ],
  imports: [
    BrowserModule,
    RouterLink,
    RouterLinkActive,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(),
    ProductService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
