import { Component } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent  {

  private ultimo: string="";
  get resultados(){
    return this.gifsService.resultados;
  }

  constructor(private gifsService: GifsService) {

   if (gifsService.historial){
    this.ultimo = gifsService.historial[0];
   }
     

   }


}
