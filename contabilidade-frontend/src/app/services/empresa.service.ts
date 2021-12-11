import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmpresaDTO } from '../dto/empresa.dto';
import { RequestDTO } from '../dto/request.dto';
import { ResponseDTO } from '../dto/response.dt';
import { MensagensService } from './mensagens.service';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(
    private httpClient: HttpClient,
    private mensagensService: MensagensService) { }

  buscarPorId(id: string): Observable<ResponseDTO<EmpresaDTO>> {
    return this.httpClient.get<ResponseDTO<EmpresaDTO>>(`${environment.BASE_API_URL}/api/v1/empresa/${id}`);
  }

  salvar(empresa: EmpresaDTO) {
    let request: RequestDTO<EmpresaDTO> = new RequestDTO<EmpresaDTO>();
    request.model = empresa;
    request.auditoria.acao = 'Editar Empresa';
    request.auditoria.usuario = 'usuario';
    this.httpClient.put<ResponseDTO<EmpresaDTO>>(`${environment.BASE_API_URL}/api/v1/empresa/${empresa.id}`, request)
      .subscribe(response => {
        if (response.sucesso) {
          this.mensagensService.mensagemSucesso(`Dados salvos com sucesso`);
        } else {
          this.mensagensService.mensagemAlerta(`${response.mensagem!}`);
        }
      });
  }
}
