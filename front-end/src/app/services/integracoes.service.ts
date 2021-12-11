import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ITransacao } from '../models/itransacao';
import { IOrigemConfig } from '../models/itransacao-config.model';
import { IStandardResponse } from '../models/standard-response.viewmodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntegracoesService {

  constructor(private _httpClient: HttpClient) { }

  buscarOrigem(codigo: string): Observable<IStandardResponse<IOrigemConfig>> {
    let origem = this._httpClient.get<IStandardResponse<IOrigemConfig>>(`http://localhost:4201/v1/configuracao/integracao/${codigo}`);

    return origem;
  }

  listarOrigens(pagina: number): Observable<IStandardResponse<Array<IOrigemConfig>>> {
    let origens = this._httpClient.get<IStandardResponse<Array<IOrigemConfig>>>(`http://localhost:4201/v1/configuracao/integracao/`);

    console.clear();
    console.log(origens);
    return origens;
  }

  listarTransacoes(pagina: number): Observable<IStandardResponse<Array<ITransacao>>> {
    return this._httpClient.get<IStandardResponse<Array<ITransacao>>>(`http://localhost:4201/v1/transacoes/?pagina=${pagina}`);
  }

  novaIntegracao(origem: IOrigemConfig) {
    return this._httpClient.post<IStandardResponse<boolean>>(`http://localhost:4201/v1/configuracao/integracao`, origem);
  }

  alterarIntegracao(origem: IOrigemConfig) {
    return this._httpClient.put<IStandardResponse<boolean>>(`http://localhost:4201/v1/configuracao/integracao`, origem);
  }
}
