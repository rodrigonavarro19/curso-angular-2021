
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as  mapboxgl  from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.css']
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 10;
  center : [number, number] = [-70.7828235, -33.5354326];

  constructor() { }
  ngOnDestroy(): void {
    this.mapa.off('zoom', () => {});
    this.mapa.off('zoomend', () => {});
    this.mapa.off('move', () => {});
  }

  ngAfterViewInit(): void {


    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel,
      
    });

    this.mapa.on('zoom', () =>{
      this.zoomLevel = this.mapa.getZoom();
    });

    this.mapa.on('zoomend', () =>{
      if (this.mapa.getZoom() > 18){
        this.mapa.zoomTo( 18 );

      }
    });

    this.mapa.on('move', (event)=>{
      const target = event.target ;
      const { lng , lat } = target.getCenter();
      this.center = [lng, lat];
    });
    
  }

  zoomIn(){
    console.log("ZOOM IN");
    this.mapa.zoomIn();
    
  }

  zoomOut(){
    console.log("ZOOM OUT");
    this.mapa.zoomOut();
    
  }

  zoomCambio(valor: string){
    this.mapa.zoomTo( parseInt(valor))
    console.log(valor)

  }

}
