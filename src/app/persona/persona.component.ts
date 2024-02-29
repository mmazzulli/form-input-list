import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  nombre:       string = 'Marcelo' 
  apellido:     string = 'Marchesin'
  edad:         number = 52
  
  // Modo Privado 
  // private edad: number = 52

  // getEdad(): number {
  // 	return this.edad;
  // }

}
