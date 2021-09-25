//import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})


export class ListadoComponent  {
//  constructor() { console.log('Constructor.....'); }
  heroes: string[] = ['Spiderman','Goku','Saitama','Luke'];
  heroeBorrado: string = '';

  borrarHeroe(){
    const heroeBorrado = this.heroes.shift() || '';
    this.heroeBorrado = heroeBorrado;
  }
  

}

// OnInit es el primer ciclo de vida, son ciertos metodos que se disparan de forma automática
/*export class ListadoComponent implements OnInit {

  constructor() { console.log('Constructor.....'); }

  // Se usa para inicializar cosas como : Peticiones a servicios etc.
  ngOnInit(): void {
    console.log('ngOnInit......');
  }

}*/
