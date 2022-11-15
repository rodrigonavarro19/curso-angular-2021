import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrasDoblesComponent } from './pages/barras-dobles/barras-dobles.component';
import { BarrasComponent } from './pages/barras/barras.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { DonaComponent } from './pages/dona/dona.component';

const routes: Routes = [{
  path:'',
  children:[
    {path:'barra', component: BarrasComponent},
    {path:'barra-doble', component: BarrasDoblesComponent},
    {path:'dona', component: DonaComponent},
    {path:'dona-http', component: DonaHttpComponent},
    {path:'**', redirectTo: 'barra'},

  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
