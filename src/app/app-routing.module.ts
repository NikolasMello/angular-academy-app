import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationMenuComponent } from './theme/navigation-menu/navigation-menu.component';
import { CleanLayoutComponent } from './theme/clean-layout/clean-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path:'',
    component: NavigationMenuComponent,
    children:[
      {
        path:'home',
        loadChildren: ()=> import('./pages/home/home.module').then((module) => module.HomeModule)
      }
    ]   
  },
  {
    path:'',
    component: CleanLayoutComponent,
    children:[
      {
        path:'',
        loadChildren: ()=> import('./pages/user/user.module').then((module) => module.UserModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
