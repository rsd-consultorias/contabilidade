import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-novo',
  templateUrl: './lancamento-novo.component.html',
  styleUrls: ['./lancamento-novo.component.scss']
})
export class LancamentoNovoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  salvar() {
    alert('salvar');
    return false;
  }

}
