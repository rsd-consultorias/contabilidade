import { Component, HostListener, OnInit } from '@angular/core';
import { constantesGlobais } from 'src/app/global';
import { ICentroCustosModel } from 'src/app/models/centro-custos.model';
import { DinheiroVO, IEvento } from 'src/app/models/itransacao';
import { IContaContabil } from 'src/app/models/itransacao-config.model';
import { ILoteModel } from 'src/app/models/lote.model';
import { IMovimentoContabilModel } from 'src/app/models/movimento-contabil.model';
import { CentroCustosService } from 'src/app/services/centro-custos.service';
import { LoteService } from 'src/app/services/lote.service';
import { MensagensService } from 'src/app/services/mensagens.service';
import { MovimentoContabilService } from 'src/app/services/movimento-contabil.service';
import { PlanoContasService } from 'src/app/services/plano-contas.service';

@Component({
  selector: 'app-editar-movimento',
  templateUrl: './editar-movimento.component.html',
  styleUrls: ['./editar-movimento.component.scss']
})
export class EditarMovimentoComponent implements OnInit {
  planoContas: Array<IContaContabil> = new Array<IContaContabil>();
  movimento: IMovimentoContabilModel = {} as IMovimentoContabilModel;
  novoEvento: IEvento = {} as IEvento;
  ano: string = constantesGlobais.periodoContabil.ano;
  mes: string = constantesGlobais.periodoContabil.mes;
  dia: number = 1;
  dias: Array<Number> = [];
  lotes: Array<ILoteModel> = [];
  centrosCustos: Array<ICentroCustosModel> = [];

  constructor(
    private _planoContasService: PlanoContasService,
    private _movimentoService: MovimentoContabilService,
    private mensagensService: MensagensService,
    private _loteService: LoteService,
    private _centrocustosService: CentroCustosService
  ) { }

  ngOnInit(): void {
    for (let i = 1; i <= 30; i++) {
      this.dias.push(i);
    }
    this._loteService.listarLotes().subscribe(data => this.lotes = data);
    this._centrocustosService.listarLotes().subscribe(data => this.centrosCustos = data);
    this.iniciarMovimento();

    this._planoContasService.listarPlanoContas(0)
      .subscribe(item => {
        this.planoContas = item.body;
      });
  }

  iniciarMovimento() {
    this.movimento = {} as IMovimentoContabilModel;
    this.movimento.contabilizacao = new Array<IEvento>();
    this.novoEvento = {} as IEvento;
    this.novoEvento.valor = { moeda: 'BRL' } as DinheiroVO;
    this.novoEvento.conta = {} as IContaContabil;
  }

  adicionar() {
    let valor = this.novoEvento!.valor!.formatado!.replace(/\./g, '').replace(/\,/g, '');
    valor = valor.replace(/\,/g, '');

    this.novoEvento!.valor!.quantia! = Number(valor);
    this.movimento!.contabilizacao.push(this.novoEvento!);
    this.novoEvento = {} as IEvento;
    this.novoEvento.valor = { moeda: 'BRL' } as DinheiroVO;
    this.novoEvento.conta = {} as IContaContabil;
  }

  remover(evento: IEvento) {
    let indice = this.movimento!.contabilizacao.indexOf(evento);
    if (indice > -1)
      this.movimento!.contabilizacao.splice(indice, 1);
  }

  salvar() {
    this.movimento.data = new Date(parseInt(this.ano), parseInt(this.mes) - 1, this.dia);
    this.movimento.contabilizacao.forEach(item => {
      item.valor.quantia = Number(item.valor.formatado!.replace(/\./g, '').replace(/\,/g, ''));
    });
    this._movimentoService.alterarMovimento(this.movimento)
      .subscribe(data => {
        if (data.mensagem) {
          this.mensagensService.mensagemAlerta(data.mensagem);
        } else {
          this.mensagensService.mensagemSucesso('Lançamento realizado');
          this.iniciarMovimento();
        }
      });
  }
}
