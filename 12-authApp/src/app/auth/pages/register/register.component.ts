import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  miFormulario :FormGroup = this.fb.group({
    name: ['user1', [Validators.required , Validators.minLength(3)]],
    email: ['test1@test.com', [Validators.required, Validators.email ]],
    password: ['123456', [Validators.required, Validators.minLength(6) ]],

  });

  constructor(private fb: FormBuilder, 
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  crearUsuario(){
    console.log(this.miFormulario.value);
    const {name, email, password } = this.miFormulario.value;
    this.authService.registro(name, email, password)
      .subscribe(resp =>{
        console.log(resp)
        if(resp ===true){
          this.router.navigateByUrl('/dashboard');
        }else{
          Swal.fire('Error', resp , 'error')
        }
      })

    
  }
}
