import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './c/pages/home/home.component';
import { Page404Component } from './c/pages/page404/page404.component';
import { ProductArchiveComponent } from './c/pages/product-archive/product-archive.component';
import { ProductSingleComponent } from './c/pages/product-single/product-single.component';

const routes: Routes = [
  { path: 'categorie/:id', component: ProductArchiveComponent },
  { path: 'product/:id', component: ProductSingleComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: Page404Component, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
