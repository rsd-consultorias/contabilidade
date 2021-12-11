import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwtPayload } from './dto/jwt.dto';
import { MensagensService } from './services/mensagens.service';
import { globalVars } from './shared/global-variables';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'contabilidade-frontend';
  cnpj: string = '';
  razaoSocial: string = '';
  autenticado = true;
  nomeUsuario: string = '';

  constructor(
    private readonly oauthService: OAuthService,
    public mensagensService: MensagensService) { }

  async ngOnInit(): Promise<void> {
    this.oauthService.setupAutomaticSilentRefresh();
    let claims: JwtPayload = this.oauthService.getIdentityClaims() as JwtPayload;
    this.nomeUsuario = claims.name!;
    this.carregarEmpresa();
  }

  carregarEmpresa() {
    this.cnpj = globalVars.getEmpresa().cnpj;
    this.razaoSocial = globalVars.getEmpresa().razaoSocial;
  }

  sair() {
    this.oauthService.logOut();
  }
}
