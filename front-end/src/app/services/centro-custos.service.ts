import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICentroCustosModel } from '../models/centro-custos.model';
import { ILoteModel } from '../models/lote.model';

@Injectable({
  providedIn: 'root'
})
export class CentroCustosService {

  constructor(private _httpClient: HttpClient) { }

  listarLotes(): Observable<Array<ICentroCustosModel>> {
    return this._httpClient.get<Array<ICentroCustosModel>>(`http://localhost:4201/v1/centro-custos`);
  }
}
