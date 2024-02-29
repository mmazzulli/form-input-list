import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soma',
  templateUrl: './soma.component.html',
  styleUrls: ['./soma.component.css']
})

export class SomaComponent {

titulo: string = 'Aplicação de Cálculo'
op1:    number = 0 
op2:    number = 0
soma:   number = 0

calculoSoma(): void {
  this.soma = this.op1 + this.op2;
}

calculoLimpa() {
  this.op1  = 0 
  this.op2  = 0
  this.soma = 0
}

}
