import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interfaces';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;

  constructor(private http :HttpClient) { }


get auth():Auth{
  return {...this._auth!}
}

verificaAutentificacion():Observable<boolean>{
  if (!localStorage.getItem('token')){
    return of(false);
  }

  return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
    .pipe(
      tap(resp => this._auth = resp),
      map(auth => {
        console.log('map',auth)
        return true;
      })
    );
  
}

login(){
  return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
    .pipe(
      tap(resp => this._auth = resp),
      tap(resp => localStorage.setItem('token', resp.id))

    )

}

logout(){
  this._auth = undefined;
}

}
