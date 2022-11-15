import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona{
  nombre:string;
  favorito: Favorito[];
}
interface Favorito{
  id: number;
  nombre: string;
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {

  nuevoJuego: string = "";
  
  persona: Persona = {
    nombre: 'Rodrigo',
    favorito : [
      {id: 1 , nombre: 'Metal Gear'},
      {id: 2 , nombre: 'PES'},
      {id: 3 , nombre: 'FIFA'},
      
    ]
  }

  



  guardar(){
    
    
    
  }

  eliminar(index: number){
    this.persona.favorito.splice(index, 1)

  }
 
  agregarJuego(){

    let ultimoId :number = 0; 
    
    this.persona.favorito.forEach( item =>{
      if (item.id >= ultimoId){
        ultimoId = item.id + 1;
      } 
      // ultimoId = ultimoId + item.id ; 
    })

    if (ultimoId === 0){
      ultimoId = 1;
    }

    const nuevofavorito :Favorito = {
      id: ultimoId,
      nombre: this.nuevoJuego  
    }

    this.persona.favorito.push( {...nuevofavorito});
    this.nuevoJuego =''
  }


}
