import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlanoContasDTO } from '../dto/plano-contas.dto';
import { ResponseDTO } from '../dto/response.dt';

@Injectable({
  providedIn: 'root'
})
export class PlanoContasService {

  constructor(private httpClient: HttpClient) { }

  listarTodos(): Observable<ResponseDTO<Array<PlanoContasDTO>>> {
    return this.httpClient.get<ResponseDTO<Array<PlanoContasDTO>>>(`${environment.BASE_API_URL}/api/v1/plano-contas`);
  }
}
