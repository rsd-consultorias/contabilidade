import { Component } from '@angular/core';
import { constantesGlobais } from './global';
import { MensagensService } from './services/mensagens.service';

import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portal-corretor';
  ano: string = constantesGlobais.periodoContabil.ano;
  mes: string = constantesGlobais.periodoContabil.mes;
  teste= environment.TESTE_VAR;

  mensagem: string = '';

  constructor(public mensagensService: MensagensService) {
    setInterval(() => {
      this.mensagensService.mensagemSucesso('Processo background');
    }, 60000);
  }
}
