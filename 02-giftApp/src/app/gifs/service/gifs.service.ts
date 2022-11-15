import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey    : string ="GO5lpTFzJxdQJyNpWxvv02SfMI92XNOW";
  private _historial: string[] = [];

  public resultados: Gif[] =[];

  get historial(){
    return [...this._historial];
  }

  constructor(private http:HttpClient){

    if (localStorage.getItem('historial')){
      this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
      this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];

    }

  }
  
  buscarGifs(query:string){

    query = query.trim().toLowerCase();

    if (!this._historial.includes(query)){
      
      this._historial.unshift(query);
      this._historial = this._historial.slice(0,10);
      console.log(this._historial);

      localStorage.setItem('historial', JSON.stringify(this._historial))
    }

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${ query }&limit=10`)
      .subscribe( (resp) =>{
        console.log(resp.data);
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados))
      })


  }
  


  
}
