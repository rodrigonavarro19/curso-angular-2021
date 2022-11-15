import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  });

  color : string = 'red';
  texto1: string = 'Rodrigo Navarro';

  constructor(private fb :FormBuilder) { }

  ngOnInit(): void {
  }

  tieneError(campo: string): boolean {
    return (this.miFormulario.get(campo)?.invalid 
            // && 
            // this.miFormulario.get(campo)?.touched
            )
            ? true : false;
  }

  cambiarNombre(){
    this.texto1 = "Ignacio Navarro Flores xx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }

  cambiarColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;

  }

}
