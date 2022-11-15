import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap, } from "rxjs/operators";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img{
      max-width: 350px;
      width: 100%;
      border-radius: 10px;
      margin-left: auto;
      margin-right: auto;
      display: block;
    }
  `
  ]
})
export class HeroeComponent implements OnInit {

  heroe! :Heroe; 

  constructor(
    private activatedRoute: ActivatedRoute, 
    private heroesService :HeroesService,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.heroesService.getHeroePorId(id))
      )
      .subscribe( heroe => this.heroe = heroe );
    

  }

  regresar(){
    this.router.navigate(['/heroes/listado'])
  }

 
  
}
