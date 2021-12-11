import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IOrigemConfig, ITransacaoConfig, IEventoConfig, IEventoContabilizacao, IContaContabil } from 'src/app/models/itransacao-config.model';
import { IntegracoesService } from 'src/app/services/integracoes.service';
import { MensagensService } from 'src/app/services/mensagens.service';
import { PlanoContasService } from 'src/app/services/plano-contas.service';

@Component({
  selector: 'app-nova-integracao',
  templateUrl: './nova-integracao.component.html',
  styleUrls: ['./nova-integracao.component.scss']
})
export class NovaIntegracaoComponent implements OnInit {
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
    private route: ActivatedRoute,
    private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.origemAtual = {} as IOrigemConfig;
    this.origemAtual.transacoes = new Array<ITransacaoConfig>();

    this._planoContasService.listarPlanoContas(0)
      .subscribe(item => {
        // this.planoContas = item.body.contas;

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
    this._integracoesService.novaIntegracao(this.origemAtual)
      .subscribe(data => {
        if (data.mensagem) {
          this.mensagensService.mensagemAlerta(data.mensagem);
        } else {
          this.mensagensService.mensagemSucesso('Integração salva com sucesso');
        }
      });
      
    this.router.navigate(['configuracoes/integracoes/editar', this.origemAtual.codigoOrigem]);
  }

  async carregarOrigem(codigo: string) {
    this.origemAtual = {} as IOrigemConfig;

    this.origemAtual.transacoes = new Array<ITransacaoConfig>();
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
    let indice = this.transacaoAtual.eventos.indexOf(evento);
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
