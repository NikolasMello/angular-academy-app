import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path:'entrada',
        loadComponent: ()=> import('./controlador-entrada/controlador-entrada.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoradorRoutingModule { }
