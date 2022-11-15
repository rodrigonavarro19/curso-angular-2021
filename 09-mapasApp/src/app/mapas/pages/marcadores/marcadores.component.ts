import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as  mapboxgl  from 'mapbox-gl';

interface MarcadorColor{
  color: string;
  marker?: mapboxgl.Marker;
  centro?: [number, number];
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.css']
})
export class MarcadoresComponent implements AfterViewInit {


  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 15;
  center : [number, number] = [-70.7828235, -33.5354326];

  marcadores: MarcadorColor[] = [];

  constructor() { }
  
  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel,
      
    });

    this.leerLocalStorage();
  //   const markerHtml : HTMLElement = document.createElement('div');
  //   markerHtml.innerHTML = 'Hola mundo'

  //   const marker = new mapboxgl.Marker({
  //     element: markerHtml
  //   })
  //     .setLngLat( this.center )
  //     .addTo(this.mapa);


  }

  ngOnInit(): void {
  }

  irMarcador(miMarcador: MarcadorColor){
    this.mapa.flyTo({
         center: miMarcador.marker!.getLngLat()
      })
  }
  agregarMarcador(){

    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));

    const nuevoMarcador = new mapboxgl.Marker({
      draggable: true,
      color: color
    })
      .setLngLat(this.center)
      .addTo( this.mapa);

    this.marcadores.push({
      color: color,
      marker: nuevoMarcador 
    }); 

    this.guardarMarcadoresLocalStorage();
    nuevoMarcador.on('dragend', ()=>{
      this.guardarMarcadoresLocalStorage();
    });
  }

  guardarMarcadoresLocalStorage(){

    const lngLatArr : MarcadorColor[] = [];
    this.marcadores.forEach(m => {

      const color = m.color;
      const {lng, lat} = m.marker!.getLngLat();

      lngLatArr.push({
        color: color,
        centro: [ lng , lat ]
      })
    })

    localStorage.setItem('marcadores', JSON.stringify(lngLatArr));
  }

  leerLocalStorage(){

    if( !localStorage.getItem('marcadores') ){
      return;
    }

    const lngLatArr: MarcadorColor[] = JSON.parse(localStorage.getItem('marcadores')!);

    console.log(lngLatArr);
    lngLatArr.forEach( m => {
      const newMarker = new mapboxgl.Marker({
        color: m.color,
        draggable: true
      })
      .setLngLat(m.centro!)
      .addTo(this.mapa);

      this.marcadores.push({
        marker: newMarker,
        color: m.color
      })

      newMarker.on('dragend', ()=>{
        this.guardarMarcadoresLocalStorage();
      });
    });
  }

  borrarMarcador(i: number){
    console.log("Borrando Marcador ", i)

    this.marcadores[i].marker?.remove();
    this.marcadores.splice(i , 1);
    this.guardarMarcadoresLocalStorage();
  }

}
