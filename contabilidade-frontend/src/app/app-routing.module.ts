import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentrosCustosComponent } from './components/configuracoes/centros-custos/centros-custos.component';
import { ConfiguracoesHomeComponent } from './components/configuracoes/configuracoes-home/configuracoes-home.component';
import { ConfiguracoesComponent } from './components/configuracoes/configuracoes.component';
import { EmpresaComponent } from './components/configuracoes/empresa/empresa.component';
import { IntegracoesComponent } from './components/configuracoes/integracoes/integracoes.component';
import { LotesComponent } from './components/configuracoes/lotes/lotes.component';
import { EditarContaComponent } from './components/configuracoes/plano-contas/plano-contas-novo/editar-conta/editar-conta.component';
import { PlanoContasHomeComponent } from './components/configuracoes/plano-contas/plano-contas-home/plano-contas-home.component';
import { PlanoContasNovoComponent } from './components/configuracoes/plano-contas/plano-contas-novo/plano-contas-novo.component';
import { PlanoContasComponent } from './components/configuracoes/plano-contas/plano-contas.component';
import { TransacoesComponent } from './components/configuracoes/transacoes/transacoes.component';
import { UsuariosPermissoesComponent } from './components/configuracoes/usuarios-permissoes/usuarios-permissoes.component';
import { DemonstracaoBalancoPatrimonialComponent } from './components/demonstracoes-contabeis/demonstracao-balanco-patrimonial/demonstracao-balanco-patrimonial.component';
import { DemonstracaoHomeComponent } from './components/demonstracoes-contabeis/demonstracao-home/demonstracao-home.component';
import { DemonstracaoIndicadoresComponent } from './components/demonstracoes-contabeis/demonstracao-indicadores/demonstracao-indicadores.component';
import { DemonstracaoMutacaoPatrimonioLiquidoComponent } from './components/demonstracoes-contabeis/demonstracao-mutacao-patrimonio-liquido/demonstracao-mutacao-patrimonio-liquido.component';
import { DemonstracaoRazaoComponent } from './components/demonstracoes-contabeis/demonstracao-razao/demonstracao-razao.component';
import { DemonstracaoResultadoComponent } from './components/demonstracoes-contabeis/demonstracao-resultado/demonstracao-resultado.component';
import { DemonstracoesContabeisComponent } from './components/demonstracoes-contabeis/demonstracoes-contabeis.component';
import { AtivoFixoComponent } from './components/financeiro/ativo-fixo/ativo-fixo.component';
import { ContasPagarComponent } from './components/financeiro/contas-pagar/contas-pagar.component';
import { ContasReceberComponent } from './components/financeiro/contas-receber/contas-receber.component';
import { FinanceiroComponent } from './components/financeiro/financeiro.component';
import { FluxoCaixaComponent } from './components/financeiro/fluxo-caixa/fluxo-caixa.component';
import { HomeFinanceiroComponent } from './components/financeiro/home-financeiro/home-financeiro.component';
import { HomeComponent } from './components/home/home.component';
import { LancamentoAlterarComponent } from './components/lancamentos/lancamento-alterar/lancamento-alterar.component';
import { LancamentoExcluirComponent } from './components/lancamentos/lancamento-excluir/lancamento-excluir.component';
import { LancamentoHomeComponent } from './components/lancamentos/lancamento-home/lancamento-home.component';
import { LancamentoNovoComponent } from './components/lancamentos/lancamento-novo/lancamento-novo.component';
import { LancamentosComponent } from './components/lancamentos/lancamentos.component';
import { LoginComponent } from './components/login/login.component';
import { LogoffComponent } from './components/logoff/logoff.component';
import { NovaContaComponent } from './components/configuracoes/plano-contas/plano-contas-novo/nova-conta/nova-conta.component';
import { ExcluirContaComponent } from './components/configuracoes/plano-contas/plano-contas-novo/excluir-conta/excluir-conta.component';
import { PlanoContasNovoHomeComponent } from './components/configuracoes/plano-contas/plano-contas-novo/plano-contas-novo-home/plano-contas-novo-home.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { LoginCallbackComponent } from './components/login-callback/login-callback.component';
import { CallbackGuardService } from './guards/callback-guard.sevice';

const routes: Routes = [
  {
    path: 'financeiro', component: FinanceiroComponent, canActivate: [AuthGuardService],
    children: [
      { path: 'fluxo-caixa', component: FluxoCaixaComponent, canActivate: [AuthGuardService] },
      { path: 'contas-pagar', component: ContasPagarComponent, canActivate: [AuthGuardService] },
      { path: 'contas-receber', component: ContasReceberComponent, canActivate: [AuthGuardService] },
      { path: 'ativo-fixo', component: AtivoFixoComponent, canActivate: [AuthGuardService] },
      { path: '**', component: HomeFinanceiroComponent, canActivate: [AuthGuardService] }
    ]
  },
  {
    path: 'lancamentos', component: LancamentosComponent, canActivate: [AuthGuardService],
    children: [
      { path: 'novo', component: LancamentoNovoComponent, canActivate: [AuthGuardService] },
      { path: 'alterar', component: LancamentoAlterarComponent, canActivate: [AuthGuardService] },
      { path: 'excluir', component: LancamentoExcluirComponent, canActivate: [AuthGuardService] },
      { path: '**', component: LancamentoHomeComponent, canActivate: [AuthGuardService] }
    ]
  },
  {
    path: 'demonstracoes', component: DemonstracoesContabeisComponent, canActivate: [AuthGuardService],
    children: [
      { path: 'razao', component: DemonstracaoRazaoComponent, canActivate: [AuthGuardService] },
      { path: 'balanco-patrimonial', component: DemonstracaoBalancoPatrimonialComponent, canActivate: [AuthGuardService] },
      { path: 'resultado', component: DemonstracaoResultadoComponent, canActivate: [AuthGuardService] },
      { path: 'mutacao-patrimonio-liquido', component: DemonstracaoMutacaoPatrimonioLiquidoComponent, canActivate: [AuthGuardService] },
      { path: 'indicadores', component: DemonstracaoIndicadoresComponent, canActivate: [AuthGuardService] },
      { path: '**', component: DemonstracaoHomeComponent, canActivate: [AuthGuardService] }
    ]
  },
  {
    path: 'configuracoes', component: ConfiguracoesComponent, canActivate: [AuthGuardService],
    children: [
      { path: 'empresa', component: EmpresaComponent, canActivate: [AuthGuardService] },
      { path: 'centros-custos', component: CentrosCustosComponent, canActivate: [AuthGuardService] },
      {
        path: 'plano-contas', component: PlanoContasComponent, canActivate: [AuthGuardService],
        children: [
          {
            path: 'novo', component: PlanoContasNovoComponent, canActivate: [AuthGuardService],
            children: [
              { path: 'nova-conta', component: NovaContaComponent, canActivate: [AuthGuardService] },
              { path: 'alterar-conta', component: EditarContaComponent, canActivate: [AuthGuardService] },
              { path: 'excluir-conta', component: ExcluirContaComponent, canActivate: [AuthGuardService] },
              { path: '**', component: PlanoContasNovoHomeComponent, canActivate: [AuthGuardService] }
            ]
          },
          { path: '**', component: PlanoContasHomeComponent, canActivate: [AuthGuardService] }
        ]
      },
      { path: 'lotes', component: LotesComponent, canActivate: [AuthGuardService] },
      { path: 'usuarios-permissoes', component: UsuariosPermissoesComponent, canActivate: [AuthGuardService] },
      { path: 'transacoes', component: TransacoesComponent, canActivate: [AuthGuardService] },
      { path: 'integracoes', component: IntegracoesComponent, canActivate: [AuthGuardService] },
      { path: '**', component: ConfiguracoesHomeComponent, canActivate: [AuthGuardService] }
    ]
  },
  { path: 'login-callback', component: LoginCallbackComponent, canActivate: [CallbackGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'logoff', component: LogoffComponent },
  { path: '**', component: HomeComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
