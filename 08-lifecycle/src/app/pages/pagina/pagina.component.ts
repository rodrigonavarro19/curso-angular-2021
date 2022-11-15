import { AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';
import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styles: [
  ]
})
export class PaginaComponent implements OnInit, OnChanges,DoCheck,AfterContentInit,AfterContentChecked,
                                        AfterViewInit,AfterViewChecked,OnDestroy {

  constructor() { console.log("Constructor")}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
  
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  
  ngAfterViewChecked(): void {
    console.log('ngAfterView');
  }
  
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  
  ngOnInit(): void {
    console.log("ngOnInit");
  }

}
