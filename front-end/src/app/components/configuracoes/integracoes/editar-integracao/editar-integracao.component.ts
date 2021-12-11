import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrigemConfig, ITransacaoConfig, IEventoConfig, IContaContabil, IEventoContabilizacao } from 'src/app/models/itransacao-config.model';
import { IntegracoesService } from 'src/app/services/integracoes.service';
import { MensagensService } from 'src/app/services/mensagens.service';
import { PlanoContasService } from 'src/app/services/plano-contas.service';

@Component({
  selector: 'app-editar-integracao',
  templateUrl: './editar-integracao.component.html',
  styleUrls: ['./editar-integracao.component.scss']
})
export class EditarIntegracaoComponent implements OnInit {
  origemAtual: IOrigemConfig = {} as IOrigemConfig;
  novaTransacao: ITransacaoConfig = {} as ITransacaoConfig;
  novoEvento: IEventoConfig = {} as IEventoConfig;
  novaContabilizacao: IEventoContabilizacao = {} as IEventoContabilizacao;

  transacaoAtual: ITransacaoConfig = {} as ITransacaoConfig;
  eventoAtual: IEventoConfig = {} as IEventoConfig;
  eventoContabilizacao: Array<IEventoContabilizacao> = new Array<IEventoContabilizacao>();

  planoContas: Array<IContaContabil> = new Array<IContaContabil>();

  constructor(
    private _integracoesService: IntegracoesService,
    private _planoContasService: PlanoContasService,
    private mensagensService: MensagensService,
    private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.origemAtual = {} as IOrigemConfig;
    this.origemAtual.transacoes = new Array<ITransacaoConfig>();

    this.carregarOrigem();
    this._planoContasService.listarPlanoContas(0)
      .subscribe(item => {

        item.body.forEach(conta => {
          this.planoContas.push(conta);
          if (conta.conta != undefined) {
            conta.conta.forEach((e) => {
              this.planoContas.push(e);
              this.carregarConta(e)
            });
          }
        });
      });
  }

  private carregarConta(conta: IContaContabil) {
    if (conta) {
      conta.conta.forEach(e => {
        this.planoContas.push(e);
        this.carregarConta(e)
      });
    }
  }

  salvar() {
    this._integracoesService.alterarIntegracao(this.origemAtual)
      .subscribe(data => {
        if (data.mensagem) {
          this.mensagensService.mensagemAlerta(data.mensagem);
        } else {
          this.mensagensService.mensagemSucesso('Integração salva com sucesso');
        }
        this.carregarOrigem();
      });
  }

  async carregarOrigem() {
    this.origemAtual = {} as IOrigemConfig;
    this.origemAtual.transacoes = new Array<ITransacaoConfig>();
    let codigoQuery = this.route.snapshot.params.id;

    this._integracoesService.buscarOrigem(codigoQuery).subscribe(origem => {
      this.origemAtual = origem.body!;
    });
  }

  adicionarTransacao() {
    this.novaTransacao.eventos = new Array<IEventoConfig>();
    this.origemAtual.transacoes.push(this.novaTransacao);
    this.novaTransacao = {} as ITransacaoConfig;
  }

  removerTransacao(transacao: ITransacaoConfig) {
    let indice = this.origemAtual.transacoes.indexOf(transacao);
    if (indice > -1)
      this.origemAtual.transacoes.splice(indice, 1);
  }

  adicionarEvento() {
    this.novoEvento.contabilizacao = new Array<IEventoContabilizacao>();
    this.transacaoAtual.eventos.push(this.novoEvento);
    this.novoEvento = {} as IEventoConfig;
  }

  removerEvento(evento: IEventoConfig) {
    let indice = this.transacaoAtual.eventos.indexOf(evento, 0);
    if (indice > -1)
      this.transacaoAtual.eventos.splice(indice, 1);
  }

  adicionarContabilizacao() {
    this.eventoAtual.contabilizacao.push(this.novaContabilizacao);
    this.novaContabilizacao = {} as IEventoContabilizacao;
  }

  removerContabilizacao(contabilizacao: IEventoContabilizacao) {
    let indice = this.eventoContabilizacao.indexOf(contabilizacao);
    if (indice > -1)
      this.eventoContabilizacao.splice(indice, 1);
  }

  carregarEventos(transacao: ITransacaoConfig) {
    this.eventoContabilizacao = [];
    this.eventoAtual = {} as IEventoConfig;
    this.transacaoAtual = transacao;
  }

  carregarContabilizacoes(evento: IEventoConfig) {
    this.eventoAtual = evento;
    this.eventoContabilizacao = this.eventoAtual.contabilizacao;
  }
}
