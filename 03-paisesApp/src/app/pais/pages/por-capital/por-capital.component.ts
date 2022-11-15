import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {


  termino   : string = ""
  hayError  : boolean = false;
  paises    : Country[] = [];

  constructor(private paisService : PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino : string ){
    this.hayError = false;
    this.termino = termino;
   

    this.paisService.buscarCapital(this.termino)
      .subscribe(resp  =>{
        console.log(resp)

        console.log(resp[0].languages[0].name)
        this.paises = resp;
        
      },(err =>{
        
       this.hayError = true;
       this.paises = []
      }));
  }

  

}

