import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  //i18nSelect
  nombre: string = "Rodrigo";
  genero: string = "masculino";
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }
  
  //i18nPlural
  cliente :string [] = ['Maria', 'Pedro','Juan','Rodrigo'];
  clientesMapas = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    '=2':'tenemos 2 clientes esperando.',
    'other':'tenemos # clientes esperando.',
  } 
  
  cambiarCliente(){
    if (this.genero === 'masculino'){
      this.nombre = "Nataly";
      this.genero = "femenino";
    }else{
      this.nombre = "Rodrigo";
      this.genero = "masculino";
    }

  }

  borrarCliente(){
    this.cliente.splice(0,1)
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Rodrigo',
    edad: 31,
    direccion:'Santiago, Chile'
  }

  //JSON pipe
  heroes = [
    {
      nombre:'Superman',
      vuela :true
    },
    {
      nombre:'Robin',
      vuela :false
    },
    {
      nombre:'Aquaman',
      vuela :false
    },
    ]

    // Async Pipe
    miObservable = interval(1000);

    valorPromesa = new Promise((resolve , reject )=>{

      setTimeout(() =>{
        resolve("tenemos data de promesa")
      },3500)
    });

  ngOnInit() {
    
  }

}
