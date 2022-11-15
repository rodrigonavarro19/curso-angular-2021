import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Input() placeHolder :string = '';
  @Output() onEnter    :EventEmitter<string> = new EventEmitter();
  @Output() onDebounce :EventEmitter<string> = new EventEmitter();
  
  debounce: Subject<string> = new Subject();

  termino: string = "";
  
  ngOnInit() {
    this.debounce
    .pipe(
      debounceTime(300)
    )
    .subscribe( valor =>{
      console.log("debounce ", valor)
      this.onDebounce.emit(valor);
      
    });


  }


  buscar(){  
    this.onEnter.emit( this.termino )

  }
  
  teclaPrecionada(){
    this.debounce.next(this.termino);
  
  }

}
