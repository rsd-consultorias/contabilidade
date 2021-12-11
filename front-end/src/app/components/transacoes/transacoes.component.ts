import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITransacao } from 'src/app/models/itransacao';
import { IntegracoesService } from 'src/app/services/integracoes.service';

@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoes.component.html',
  styleUrls: ['./transacoes.component.scss']
})
export class TransacoesComponent implements OnInit {
  title = 'Transações';
  transacoes: Array<ITransacao> = [];
  transacaoAtual: ITransacao | undefined;
  quantidadePaginas: Array<Number> = [];
  paginaAtual: number = 1;

  constructor(private _router: Router, private _route: ActivatedRoute, private _integracoesService: IntegracoesService) { }

  ngOnInit(): void {
    this.carregarDados(1);
  }

  private carregarDados(pagina: number) {
    this._integracoesService.listarTransacoes(pagina).subscribe((data: { quantidade: number; body: any[]; }) => {
      this.paginaAtual = pagina;
      this.quantidadePaginas = [];

      for (let a = 1; a <= Math.ceil(data.quantidade / 15); a++) {
        this.quantidadePaginas.push(a);
      }

      this.transacoes = data.body;
    });
  }

  public editar(transacao: ITransacao) {
    this.transacaoAtual = transacao;
    alert(JSON.stringify(transacao));
  }

  public navegar(pagina: number) {
    this.carregarDados(pagina);
  }

  public avancar(pagina: number) {
    this.navegar(this.paginaAtual + pagina);
  }
}
