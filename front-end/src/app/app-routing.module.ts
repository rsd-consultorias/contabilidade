import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallbackLogoffComponent } from './components/callback-logoff/callback-logoff.component';
import { CallbackLogonComponent } from './components/callback-logon/callback-logon.component';
import { CentrosCustosComponent } from './components/centros-custos/centros-custos.component';
import { ConfiguracoesComponent } from './components/configuracoes/configuracoes.component';
import { DadosFiscaisComponent } from './components/configuracoes/dados-fiscais/dados-fiscais.component';
import { EditarIntegracaoComponent } from './components/configuracoes/integracoes/editar-integracao/editar-integracao.component';
import { IntegracoesComponent } from './components/configuracoes/integracoes/integracoes.component';
import { NovaIntegracaoComponent } from './components/configuracoes/integracoes/nova-integracao/nova-integracao.component';
import { LotesComponent } from './components/configuracoes/lotes/lotes.component';
import { OpcoesComponent } from './components/configuracoes/opcoes/opcoes.component';
import { PlanoContasComponent } from './components/configuracoes/plano-contas/plano-contas.component';
import { SPEDContabilComponent } from './components/configuracoes/spedcontabil/spedcontabil.component';
import { UsuariosComponent } from './components/configuracoes/usuarios/usuarios.component';
import { ContaPagarReceberNovoComponent } from './components/contas-pagar-receber/conta-pagar-receber-novo/conta-pagar-receber-novo.component';
import { ContasPagarReceberComponent } from './components/contas-pagar-receber/contas-pagar-receber.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogoffComponent } from './components/logoff/logoff.component';
import { LogonComponent } from './components/logon/logon.component';
import { ListarMovimentosComponent } from './components/movimentos/listar-movimentos/listar-movimentos.component';
import { MovimentosComponent } from './components/movimentos/movimentos.component';
import { NovoMovimentoComponent } from './components/movimentos/novo-movimento/novo-movimento.component';
import { RelatorioBalancoPatrimonialComponent } from './components/relatorio-balanco-patrimonial/relatorio-balanco-patrimonial.component';
import { RelatorioDemonstrativoResultadoComponent } from './components/relatorio-demonstrativo-resultado/relatorio-demonstrativo-resultado.component';
import { RelatorioRazaoComponent } from './components/relatorio-razao/relatorio-razao.component';
import { SaldosComponent } from './components/saldos/saldos.component';
import { TransacoesComponent } from './components/transacoes/transacoes.component';

const routes: Routes = [
  { path: 'callback-logon', component: CallbackLogonComponent },
  { path: 'callback-logoff', component: CallbackLogoffComponent },
  { path: 'logon', component: LogonComponent },
  { path: 'logoff', component: LogoffComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'transacoes', component: TransacoesComponent },
  {
    path: 'movimentos', component: MovimentosComponent,
    children: [
      { path: 'novo', component: NovoMovimentoComponent },
      { path: '**', component: ListarMovimentosComponent },
    ]
  },
  { path: 'saldos', component: SaldosComponent },
  { path: 'contaspagarreceber', component: ContasPagarReceberComponent },
  { path: 'contaspagarreceber/novo', component: ContaPagarReceberNovoComponent },
  { path: 'configuracoes', component: ConfiguracoesComponent },
  { path: 'configuracoes/dados-fiscais', component: DadosFiscaisComponent },
  { path: 'configuracoes/plano-contas', component: PlanoContasComponent },
  { path: 'configuracoes/lotes', component: LotesComponent },
  { path: 'configuracoes/centros-custos', component: CentrosCustosComponent },
  { path: 'configuracoes/integracoes', component: IntegracoesComponent },
  { path: 'configuracoes/sped-contabil', component: SPEDContabilComponent },
  { path: 'configuracoes/opcoes-sistema', component: OpcoesComponent },
  { path: 'configuracoes/usuarios', component: UsuariosComponent },
  { path: 'configuracoes/integracoes/nova', component: NovaIntegracaoComponent },
  { path: 'configuracoes/integracoes/editar/:id', component: EditarIntegracaoComponent },
  { path: 'livro-razao', component: RelatorioRazaoComponent },
  { path: 'demonstrativo-resultado', component: RelatorioDemonstrativoResultadoComponent },
  { path: 'balanco-patrimonial', component: RelatorioBalancoPatrimonialComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
