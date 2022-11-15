import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaginaComponent } from './pages/pagina/pagina.component';
import { MuestraNombreComponent } from './components/muestra-nombre/muestra-nombre.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent,
    MuestraNombreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
