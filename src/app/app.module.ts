import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersPageComponent } from './MyComponents/orders-page/orders-page.component';
import { TopHeaderComponent } from './MyComponents/top-header/top-header.component';
import { SideHeaderComponent } from './MyComponents/side-header/side-header.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersPageComponent,
    TopHeaderComponent,
    SideHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
