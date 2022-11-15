import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent  {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string ="";
  paises: Country[] =[];


  constructor( private paisService: PaisService) { }

  getclaseCSS(region:string) :string{
    return (region === this.regionActiva) ? 'btn btn-primary m-1' :'btn btn-outline-primary m-1'
  }

  activarRegion(region:string){

    if (this.regionActiva === region) {return}
    
    this.regionActiva = region
    this.paises = []
    // TODO: hacer el llamdo al servicio
    this.paisService.buscarRegion(this.regionActiva)
      .subscribe(resp =>{
        this.paises = resp
      }) 

  }

  
}
