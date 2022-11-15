import { Component,  OnInit,  ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'Tarjeta de Video',
    precio: 10,
    existencias : 10
  };

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean{
    return (this.miFormulario?.controls.producto?.invalid 
            &&
           this.miFormulario?.controls.producto?.touched)?false: true;
  }
  precioValido() :boolean{
    return (this.miFormulario?.controls.precio?.invalid
            &&
            this.miFormulario.controls.precio?.touched)?false:true;
  }

  guardar( ){
    console.log(this.miFormulario);

    this.miFormulario.resetForm({
      producto: "Algo",
      precio : 0,
      existencias: 0
    });
  }

}
