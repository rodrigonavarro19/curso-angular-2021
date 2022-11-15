import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre:['',[Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)  ] ],
    email:['',[Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator] ],
    username:['',[Validators.required, this.validatorService.noPuedeSerStrider  ] ],
    password:['',[Validators.required, Validators.minLength(6)  ] ],
    password2:['',[Validators.required  ] ],
  },{
    validators:[ this.validatorService.camposIguales('password','password2') ]
  })

  get emailErrorsMsg() :string {
    const error = this.miFormulario.get('email')?.errors;

    if (error?.required){
      return 'Email requerido'
    } else if (error?.pattern){
      return 'El email no tiene formato correcto'
    }else if (error?.emailTomado){
      return 'Email Tomado'
    }

    return '';
  }

  mensajeErrorEmail: string ="";

  constructor(private fb: FormBuilder, 
              private validatorService:ValidatorService,
              private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Rodrigo Navarro',
      email: 'test1@test.com',
      username: "rnavarro",
      password: '123456',
      password2: '123456',
    })
  }

  campoNoValido( campo: string ){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
    
  }

  submitFormulario(){
    console.log(this.miFormulario.value)

    this.miFormulario.markAllAsTouched();
  }

}
