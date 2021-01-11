import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './c/partials/loader/loader.component';
import { MobileNavbarComponent } from './c/partials/navbar/mobile-navbar/mobile-navbar.component';
import { DesktopNavbarComponent } from './c/partials/navbar/desktop-navbar/desktop-navbar.component';
import { Page404Component } from './c/pages/page404/page404.component';
import { HomeComponent } from './c/pages/home/home.component';
import { ProductArchiveComponent } from './c/pages/product-archive/product-archive.component';
import { ProductSingleComponent } from './c/pages/product-single/product-single.component';
import { MyAccountComponent } from './c/pages/my-account/my-account.component';
import { CartComponent } from './c/partials/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    MobileNavbarComponent,
    DesktopNavbarComponent,
    Page404Component,
    HomeComponent,
    ProductArchiveComponent,
    ProductSingleComponent,
    MyAccountComponent,
    CartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
