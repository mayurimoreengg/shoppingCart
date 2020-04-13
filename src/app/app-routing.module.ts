import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'products',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path: 'cart',
    redirectTo: '/cart',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/products',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
