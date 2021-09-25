import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule ({ 
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // Que cosas van a ser visibles en el modulo.
    exports: [
        ListadoComponent
    ],
    imports: [ // Solo modulos
       CommonModule
    ]
 })
    
export class HeroesModule {}