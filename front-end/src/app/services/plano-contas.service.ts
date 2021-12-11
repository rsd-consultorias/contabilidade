import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IContaContabil, IPlanoContas } from '../models/itransacao-config.model';
import { IStandardResponse } from '../models/standard-response.viewmodel';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PlanoContasService {
    private planoContas: Array<IContaContabil> = [];

    constructor(private _httpClient: HttpClient) {

    }

    listarPlanoContas(pagina: number): Observable<IStandardResponse<Array<IContaContabil>>> {
        return this._httpClient.get<IStandardResponse<Array<IContaContabil>>>(`http://localhost:4201/v1/plano-contas/?pagina=${pagina}`);
    }

    listarBalancoPatrimonial(): Observable<any> {
        return this._httpClient.get<any>(`http://localhost:4201/v1/saldo-contabil`);
    }
}