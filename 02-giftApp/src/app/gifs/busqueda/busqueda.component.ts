import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor( private gifsservice: GifsService){}

  buscar(){
    if (this.txtBuscar.nativeElement.value == "" || undefined ){
      return;
    } 
  
    this.gifsservice.buscarGifs( this.txtBuscar.nativeElement.value )
    this.txtBuscar.nativeElement.value ="";
  
   
  }

}
