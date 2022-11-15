import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { PaisSmall } from '../../interfaces/paises.interface';
import { pipe } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    region:['', Validators.required ],
    pais:['', Validators.required ],
    frontera:['', Validators.required ],

  })

  // LLenar Selectores
  regiones: string [] = [];
  paises : PaisSmall[] = [];
  fronteras: PaisSmall[] = [];

  //UI
  cargando = false;
  
  constructor( private fb: FormBuilder, 
               private paisesService: PaisesService) { }

  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;

    // Cuando cambie la region
    this.miFormulario.get('region')?.valueChanges
    .pipe(
      tap( (_) =>{
        this.miFormulario.get('pais')?.reset('');
        this.cargando = true;
      }),
      switchMap( region =>  this.paisesService.getPaisesPorRegion(region))
    )
    .subscribe(paises => {
     
      this.paises = (paises)?paises:[];
      this.cargando = false;
    });

    //cuando cambia el pais
    this.miFormulario.get('pais')?.valueChanges
    .pipe(
      tap( () =>{
        this.fronteras = [];
        this.miFormulario.get('frontera')?.reset('');
        this.cargando = true;
      }),
      switchMap(codigo => this.paisesService.getPaisPorCodigo (codigo)),
      switchMap(pais => this.paisesService.getPaisesPorCodigos(pais?.borders!))
    )
    .subscribe(paises => {
      console.log(paises);
      this.fronteras = paises;
      this.cargando = false;
      
    })

    }



  guardar(){
    console.log(this.miFormulario.value)
  }

}
