import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CoupensComponent } from './coupens/coupens.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch :'full'},
  {path:'dashboard',component:DashboardComponent},

  {
    path: 'products',
    loadChildren: () => import('./product/products.module').then(m => m.ProductsModule)
  },
  {path:'statistics',component:StatisticsComponent},
  {
    path: 'coupens',
    loadChildren: () => import('./coupens/coupens.module').then(m => m.CoupensModule)
  },
  {path:'media',component:MediaComponent},
  {path:'pages',component:PagesComponent},
  {path:'settings',component:SettingsComponent},
 ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
