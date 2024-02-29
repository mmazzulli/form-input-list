import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  // styleUrls: ['./personas.component.css'],
  styles: [`
      h1 {
        color: yellow;
      }
  `]
})

export class PersonasComponent {

  desabilitar = false;

  mensagem  = 'Nenhuma pessoa adicionada';
  mensagem2 = '';
  titulo1   = '';
  titulo2   = '';
  mostrar   = false

  agregarPersona() {
    this.mensagem = 'Pessoa adicionada!';
  }

  // ----------------------------------------------------

  // Binding Exemplo#1

  // HTMLInputElement é para fazer a Conversão da Variável
  modificarTitulo(event: Event) {
      this.titulo1 = (<HTMLInputElement>event.target).value
  }

  // Essa forma pode ser simplificada com ngModel como no exemplo dado na página html referente ao titulo2. 
  // Neste caso não há necessidade de nenhum método, apenas o que está na pg html.

  //-----------------------------------------------

  // Condicional 

  agregarPersona2() {
    this.mostrar = true
    this.mensagem2 = 'Profissão add'
  }

  limpar() {
    this.mostrar = false 
    this.mensagem2 = ''
  }
  

}
