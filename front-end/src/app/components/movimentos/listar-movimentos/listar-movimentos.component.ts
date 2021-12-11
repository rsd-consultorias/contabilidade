import { Component, OnInit } from '@angular/core';
import { ICentroCustosModel } from 'src/app/models/centro-custos.model';
import { IEvento } from 'src/app/models/itransacao';
import { IContaContabil } from 'src/app/models/itransacao-config.model';
import { ILoteModel } from 'src/app/models/lote.model';
import { IMovimentoContabilModel } from 'src/app/models/movimento-contabil.model';
import { CentroCustosService } from 'src/app/services/centro-custos.service';
import { LoteService } from 'src/app/services/lote.service';
import { MensagensService } from 'src/app/services/mensagens.service';
import { MovimentoContabilService } from 'src/app/services/movimento-contabil.service';
import { PlanoContasService } from 'src/app/services/plano-contas.service';

@Component({
  selector: 'app-listar-movimentos',
  templateUrl: './listar-movimentos.component.html',
  styleUrls: ['./listar-movimentos.component.scss']
})
export class ListarMovimentosComponent implements OnInit {
  quantidadePaginas: Array<Number> = [];
  paginaAtual: number = 1;
  movimento: Array<IMovimentoContabilModel> = new Array<IMovimentoContabilModel>();
  contabilizacaoAtual: IMovimentoContabilModel = {} as IMovimentoContabilModel;
  planoContas: Array<IContaContabil> = new Array<IContaContabil>();
  lotes: Array<ILoteModel> = [];
  centrosCustos: Array<ICentroCustosModel> = [];

  constructor(private _movimentoService: MovimentoContabilService,
    private _loteService: LoteService,
    private _planoContasService: PlanoContasService,
    private _centrocustosService: CentroCustosService,
    private mensagensService: MensagensService) { }

  ngOnInit(): void {
    this._loteService.listarLotes().subscribe(data => this.lotes = data);
    this._centrocustosService.listarLotes().subscribe(data => this.centrosCustos = data);
    this.carregarDados('', 1);

    this._planoContasService.listarPlanoContas(0)
      .subscribe(item => {
        this.planoContas = item.body;
      });
  }

  private carregarDados(competencia: string, pagina: number) {
    this._movimentoService.listarMovimentos('', pagina)
      .subscribe((data: { quantidade: number; registros: any[]; }) => {
        this.paginaAtual = pagina;
        this.quantidadePaginas = [];

        for (let a = 1; a <= Math.ceil(data.quantidade / 15); a++) {
          this.quantidadePaginas.push(a);
        }

        this.movimento = data.registros;
      });
  }

  public navegar(pagina: number) {
    this.carregarDados('', pagina);
  }

  public avancar(pagina: number) {
    this.navegar(this.paginaAtual + pagina);
  }

  public detalhe(contabilizacao: IMovimentoContabilModel) {
    this.contabilizacaoAtual = contabilizacao;
  }

  excluir() {
    this._movimentoService.excluir(this.contabilizacaoAtual.codigo);
    this.navegar(this.paginaAtual);
  }

  public salvar() {
    this.contabilizacaoAtual.contabilizacao.forEach(item => {
      item.valor.quantia = Number(item.valor.formatado!.replace(/\./g, '').replace(/\,/g, ''));
    });
    this._movimentoService.alterarMovimento(this.contabilizacaoAtual)
      .subscribe(data => {
        if (data.mensagem) {
          this.mensagensService.mensagemAlerta(data.mensagem);
        } else {
          this.mensagensService.mensagemSucesso('Lançamento alterado');
          this.navegar(this.paginaAtual);
        }
      });
  }
}
