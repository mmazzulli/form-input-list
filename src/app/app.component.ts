import { Component } from '@angular/core';
import { Pessoa } from './pessoa.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  titulo:  string   = 'Listagem de Pessoas';

  // Busca a "class pessoa" no file "pessoa.model.ts"
  // O file  "pessoa.module.ts" teve que ser criado manualmente
  pessoas: Pessoa[] = [ 
    new Pessoa('Robert', 'Branch')
  ]

    // Essa 'var' se associa com o 'ngModel' do campo nome do form
    nomeInput: string = '';
    // Essa 'var' se associa com o 'ngModel' do campo snome do form
    snomeInput: string = '';

    agregarPessoa() {
      let pessoa1 = new Pessoa(this.nomeInput, this.snomeInput);
      this.pessoas.push(pessoa1)
      // Limpando os campos
      this.nomeInput = '' 
      this.snomeInput = ''

    }




}
