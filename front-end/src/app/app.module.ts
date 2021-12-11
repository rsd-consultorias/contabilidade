import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TransacoesComponent } from './components/transacoes/transacoes.component';
import { MovimentosComponent } from './components/movimentos/movimentos.component';
import { SaldosComponent } from './components/saldos/saldos.component';
import { ContasPagarReceberComponent } from './components/contas-pagar-receber/contas-pagar-receber.component';
import { ConfiguracoesComponent } from './components/configuracoes/configuracoes.component';
import { RelatorioRazaoComponent } from './components/relatorio-razao/relatorio-razao.component';
import { RelatorioDemonstrativoResultadoComponent } from './components/relatorio-demonstrativo-resultado/relatorio-demonstrativo-resultado.component';
import { RelatorioBalancoPatrimonialComponent } from './components/relatorio-balanco-patrimonial/relatorio-balanco-patrimonial.component';
import { NovoMovimentoComponent } from './components/movimentos/novo-movimento/novo-movimento.component';
import { EditarMovimentoComponent } from './components/movimentos/editar-movimento/editar-movimento.component';
import { ReclassificarComponent } from './components/saldos/reclassificar/reclassificar.component';
import { ProcessarComponent } from './components/saldos/processar/processar.component';
import { FecharMesComponent } from './components/saldos/fechar-mes/fechar-mes.component';
import { EncerrarExercicioComponent } from './components/saldos/encerrar-exercicio/encerrar-exercicio.component';
import { FormsModule } from '@angular/forms';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CentrosCustosComponent } from './components/centros-custos/centros-custos.component';
import { DadosFiscaisComponent } from './components/configuracoes/dados-fiscais/dados-fiscais.component';
import { EditarIntegracaoComponent } from './components/configuracoes/integracoes/editar-integracao/editar-integracao.component';
import { IntegracoesComponent } from './components/configuracoes/integracoes/integracoes.component';
import { NovaIntegracaoComponent } from './components/configuracoes/integracoes/nova-integracao/nova-integracao.component';
import { LotesComponent } from './components/configuracoes/lotes/lotes.component';
import { OpcoesComponent } from './components/configuracoes/opcoes/opcoes.component';
import { ContasAnaliticasComponent } from './components/configuracoes/plano-contas/contas-analiticas/contas-analiticas.component';
import { EditarContaAnaliticaComponent } from './components/configuracoes/plano-contas/contas-analiticas/editar-conta-analitica/editar-conta-analitica.component';
import { NovaContaAnaliticaComponent } from './components/configuracoes/plano-contas/contas-analiticas/nova-conta-analitica/nova-conta-analitica.component';
import { EditarContaComponent } from './components/configuracoes/plano-contas/editar-conta/editar-conta.component';
import { NovaContaComponent } from './components/configuracoes/plano-contas/nova-conta/nova-conta.component';
import { PlanoContasComponent } from './components/configuracoes/plano-contas/plano-contas.component';
import { SPEDContabilComponent } from './components/configuracoes/spedcontabil/spedcontabil.component';
import { UsuariosComponent } from './components/configuracoes/usuarios/usuarios.component';
import { ListarMovimentosComponent } from './components/movimentos/listar-movimentos/listar-movimentos.component';
import { SomenteNumeroDirective } from './directives/somente-numero.directive';
import { FormatarNumeroPipe } from './pipes/formatar-numero.pipe';
import { FormatarNumeroDirective } from './directives/formatar-numero.directive';
import { FormatoDataPipePipe } from './pipes/formato-data-pipe.pipe';
import { constantesGlobais } from './global';
import { FormatoSaldoContabilPipe } from './pipes/formato-saldo-contabil.pipe';
import { ContaPagarReceberNovoComponent } from './components/contas-pagar-receber/conta-pagar-receber-novo/conta-pagar-receber-novo.component';
import { LogoffComponent } from './components/logoff/logoff.component';
import { LogonComponent } from './components/logon/logon.component';
import { CallbackLogonComponent } from './components/callback-logon/callback-logon.component';
import { CallbackLogoffComponent } from './components/callback-logoff/callback-logoff.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TransacoesComponent,
    MovimentosComponent,
    SaldosComponent,
    ContasPagarReceberComponent,
    ConfiguracoesComponent,
    RelatorioRazaoComponent,
    RelatorioDemonstrativoResultadoComponent,
    RelatorioBalancoPatrimonialComponent,
    NovoMovimentoComponent,
    EditarMovimentoComponent,
    ReclassificarComponent,
    ProcessarComponent,
    FecharMesComponent,
    EncerrarExercicioComponent,
    PlanoContasComponent,
    CadastroComponent,
    LotesComponent,
    CentrosCustosComponent,
    OpcoesComponent,
    NovaContaComponent,
    EditarContaComponent,
    ContasAnaliticasComponent,
    NovaContaAnaliticaComponent,
    EditarContaAnaliticaComponent,
    ListarMovimentosComponent,
    DadosFiscaisComponent,
    IntegracoesComponent,
    SPEDContabilComponent,
    UsuariosComponent,
    NovaIntegracaoComponent,
    EditarIntegracaoComponent,
    SomenteNumeroDirective,
    FormatarNumeroPipe,
    FormatarNumeroDirective,
    FormatoDataPipePipe,
    FormatoSaldoContabilPipe,
    ContaPagarReceberNovoComponent,
    LogoffComponent,
    LogonComponent,
    CallbackLogonComponent,
    CallbackLogoffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    FormatarNumeroPipe,
    FormatarNumeroDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
