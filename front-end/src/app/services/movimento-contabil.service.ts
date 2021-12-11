import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IStandardResponse } from '../models/standard-response.viewmodel';
import { Observable } from 'rxjs';
import { IMovimentoContabilModel } from '../models/movimento-contabil.model';
import { MensagensService } from './mensagens.service';

@Injectable({
    providedIn: 'root'
})
export class MovimentoContabilService {

    constructor(private _httpClient: HttpClient,
        private mensagensService: MensagensService) {

    }

    listarMovimentos(competencia: string, pagina: number): Observable<IStandardResponse<Array<IMovimentoContabilModel>>> {
        return this._httpClient.get<IStandardResponse<Array<IMovimentoContabilModel>>>(`http://localhost:4201/v1/movimento/?pagina=${pagina}`);
    }

    adicionarMovimento(movimento: IMovimentoContabilModel): Observable<IStandardResponse<IMovimentoContabilModel>> {
        return this._httpClient.post<IStandardResponse<IMovimentoContabilModel>>(`http://localhost:4201/v1/movimento`, movimento);
    }

    alterarMovimento(movimento: IMovimentoContabilModel): Observable<IStandardResponse<IMovimentoContabilModel>> {
        // @ts-ignore:next-line
        delete movimento.descricaoLote;
        return this._httpClient.put<IStandardResponse<IMovimentoContabilModel>>(`http://localhost:4201/v1/movimento`, movimento);
    }

    excluir(codigo: string) {
        this._httpClient.delete<IStandardResponse<boolean>>(`http://localhost:4201/v1/movimento/${codigo}`)
            .subscribe(data => {
                if (data) {
                    this.mensagensService.mensagemSucesso('Excluído com sucesso');
                } else {
                    this.mensagensService.mensagemAlerta('Erro ao excluir');
                }
            });
    }
}