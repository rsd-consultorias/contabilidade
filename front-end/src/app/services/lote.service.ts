import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ILoteModel } from '../models/lote.model';

@Injectable({
  providedIn: 'root'
})
export class LoteService {

  constructor(private _httpClient: HttpClient) { }

  listarLotes(): Observable<Array<ILoteModel>> {
    return this._httpClient.get<Array<ILoteModel>>(`http://localhost:4201/v1/lote`);
  }
}
