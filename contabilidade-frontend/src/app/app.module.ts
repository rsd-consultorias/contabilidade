import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { HomeComponent } from './components/home/home.component';
import { LancamentoHomeComponent } from './components/lancamentos/lancamento-home/lancamento-home.component';
import { LancamentoNovoComponent } from './components/lancamentos/lancamento-novo/lancamento-novo.component';
import { LancamentosComponent } from './components/lancamentos/lancamentos.component';
import { LoginComponent } from './components/login/login.component';
import { ExcluirContaComponent } from './components/configuracoes/plano-contas/plano-contas-novo/excluir-conta/excluir-conta.component';
import { NovaContaComponent } from './components/configuracoes/plano-contas/plano-contas-novo/nova-conta/nova-conta.component';
import { PlanoContasNovoHomeComponent } from './components/configuracoes/plano-contas/plano-contas-novo/plano-contas-novo-home/plano-contas-novo-home.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AuthGuardService } from './guards/auth-guard.service';
import { LoginCallbackComponent } from './components/login-callback/login-callback.component';
import { AuthConfigModule } from './auth.config.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LoginCallbackComponent,
    LancamentosComponent,
    LancamentoHomeComponent,
    LancamentoNovoComponent,
    FinanceiroComponent,
    ContasPagarComponent,
    FluxoCaixaComponent,
    ContasReceberComponent,
    AtivoFixoComponent,
    DemonstracoesContabeisComponent,
    DemonstracaoHomeComponent,
    DemonstracaoRazaoComponent,
    DemonstracaoBalancoPatrimonialComponent,
    DemonstracaoResultadoComponent,
    DemonstracaoMutacaoPatrimonioLiquidoComponent,
    DemonstracaoIndicadoresComponent,
    ConfiguracoesComponent,
    ConfiguracoesHomeComponent,
    EmpresaComponent,
    CentrosCustosComponent,
    PlanoContasComponent,
    PlanoContasHomeComponent,
    PlanoContasNovoComponent,
    PlanoContasNovoHomeComponent,
    NovaContaComponent,
    EditarContaComponent,
    ExcluirContaComponent,
    LotesComponent,
    UsuariosPermissoesComponent,
    TransacoesComponent,
    IntegracoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthConfigModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['http://localhost:4201/api'],
        sendAccessToken: true
      }
    })
  ],
  providers: [
    // AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
