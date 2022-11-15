import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent  {

  termino   : string = ""
  hayError  : boolean = false;
  paises    : Country[] = [];
  paisesSugeridos    : Country[] = [];

  constructor(private paisService : PaisService) { }


  buscar(termino : string ){
    this.hayError = false;
    this.termino = termino;
   

    this.paisService.buscarPais(this.termino)
      .subscribe(resp  =>{
        console.log(resp)

        console.log(resp[0].languages[0].name)
        this.paises = resp;
        
      },(err =>{
        
       this.hayError = true;
       this.paises = []
      }));
  }

  sugerencias(termino:any){
    this.hayError= false;

    this.paisService.buscarPais(termino)
      .subscribe(paises =>{
        return this.paisesSugeridos = paises;
      })


    console.log(termino);
  }

  

}
