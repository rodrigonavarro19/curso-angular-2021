import { Component } from '@angular/core';

interface MenuItem {
  texto:string;
  ruta: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [`
    li{
      cursor: pointer;
    }
    li:hover{
      background-color: #0d6efd;
      color :white;
    }
  `
  ]
})
export class SidemenuComponent  {

  templateMenu: MenuItem[]=[
    {
      texto:'Básicos',
      ruta: './template/basicos'
    },
    {
      texto:'Dinamicos',
      ruta: './template/dinamicos'
    },
    {
      texto:'Switches',
      ruta: './template/switches'
    },

  ]
  reactiveMenu: MenuItem[]=[
    {
      texto:'Básicos',
      ruta: './reactive/basicos'
    },
    {
      texto:'Dinamicos',
      ruta: './reactive/dinamicos'
    },
    {
      texto:'Switches',
      ruta: './reactive/switches'
    },

  ]
  authMenu :MenuItem[]=[
    {
      texto:'Registro',
      ruta: './auth/registro'
    },
    {
      texto:'Login',
      ruta: './auth/login'
    },
  ]

}