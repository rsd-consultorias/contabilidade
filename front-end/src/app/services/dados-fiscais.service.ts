import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDadosFiscaisViewModel, MoedaVO } from '../models/dados-fiscais.model';
import { IStandardResponse } from '../models/standard-response.viewmodel';
import { MensagensService } from './mensagens.service';

@Injectable({
  providedIn: 'root'
})
export class DadosFiscaisService {

  constructor(private httpClient: HttpClient,
    private mensagensService: MensagensService) { }

  async salvar(dadosFiscais: IDadosFiscaisViewModel): Promise<IDadosFiscaisViewModel> {
    let data = await this.httpClient.post<IStandardResponse<IDadosFiscaisViewModel>>(`http://localhost:4201/v1/dados-fiscais`, dadosFiscais)
      .toPromise();

    if (data.status == 'FALHA') {
      this.mensagensService.mensagemAlerta(data.mensagem);
    } else {
      this.mensagensService.mensagemSucesso('Dados salvos com sucesso');
      dadosFiscais = data.body as IDadosFiscaisViewModel;
      dadosFiscais.codigo = data.body.codigo;
    }

    return dadosFiscais;
  }

  async buscarPorCodigo(codigo: string): Promise<IDadosFiscaisViewModel> {
    let dadosFiscais: IDadosFiscaisViewModel = {} as IDadosFiscaisViewModel;
    let data = await this.httpClient.get<IStandardResponse<IDadosFiscaisViewModel>>(`http://localhost:4201/v1/dados-fiscais/${codigo}`).toPromise();
    if (data.status == 'FALHA') {
      this.mensagensService.mensagemAlerta(data.mensagem);
    } else {
      dadosFiscais = data.body;
    }

    return dadosFiscais;
  }
}
