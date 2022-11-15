import { Component, } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower ="rodrigo";
  nombreUpper ="RODRIGO";
  nombreCompleto ="rodrigONaVarro";
  
  fecha: Date = new Date(); //el dia de hoy
  
  
}
