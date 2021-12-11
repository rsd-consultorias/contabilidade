import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrls: ['./financeiro.component.scss']
})
export class FinanceiroComponent implements OnInit {
  nomePagina = 'Financeiro';
  constructor() { }

  ngOnInit(): void {
  }

  mudarNomePagina(nomePagina: string){
    this.nomePagina = nomePagina;
  }
}
