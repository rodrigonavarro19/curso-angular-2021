import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[],ordenarPor :string = '' ): Heroe[] {
    
      return (ordenarPor === 'nombre')?  
              heroes.sort( (a,b) => (a.nombre > b.nombre) ? 1 : -1  )
            : (ordenarPor === 'vuela') ?
              heroes.sort( (a,b) => (a.vuela > b.vuela) ? -1 : 1  )
            :  (ordenarPor === 'color') ?
              heroes.sort( (a,b) => (a.color > b.color) ? 1 : -1  )
            : heroes;
            
    
  }

}
