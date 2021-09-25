import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombre: string = 'Udeman';
    edad: number = 45;

    // cuando yo lo llame va a ser una propiedad procesada
    get nombreCapitalizado(){
        return this.nombre.toLocaleUpperCase();
    }

    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`  
    }

    cambiarNombre(): void {
        this.nombre = 'Epayeman';
    }

    cambiarEdad(): void{
        this.edad = 24;
    }
}