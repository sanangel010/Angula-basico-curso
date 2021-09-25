import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
//import { ContadorComponent } from './contador/contador/contador.component';
import { HeroesModule } from './heroes/heroes.module';
/* Al ya esta importados en su modulo se eliminan de aqui
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';
*/

@NgModule({
  declarations: [
    AppComponent,
   // ContadorComponent
    /* Al ya esta importados en su modulo se eliminan de aqui
    HeroeComponent,    
    ListadoComponent
    */
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
