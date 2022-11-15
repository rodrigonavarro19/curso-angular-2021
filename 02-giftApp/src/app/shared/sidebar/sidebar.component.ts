import { Component } from '@angular/core';
import { GifsService } from '../../gifs/service/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  

  get historial(){
    return this.gifsservice.historial;
  }
 
  constructor(private gifsservice: GifsService) {}
  
  buscar(temino :string){
    this.gifsservice.buscarGifs(temino)
  }

}
