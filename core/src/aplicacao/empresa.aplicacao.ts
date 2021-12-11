import { MensagemDTO, TipoMensagem } from "../dto/mensagem.dto";
import { ResponseDTO } from "../dto/response.dto";
import { Empresa } from "../entity/empresa.entity";
import { IEmpresaRepository } from "../repository/empresa.repository";
import { AplicacaoBase } from "./aplicacao.base";

export class EmpresaAplicacao extends AplicacaoBase {
    constructor(private empresaRepository: IEmpresaRepository) {
        super();
    }

    async cadastrarEmpresa(empresa: Empresa): Promise<ResponseDTO<Empresa>> {
        let response = new ResponseDTO<Empresa>();
        let retorno = await this.empresaRepository.inserir(empresa);

        if (retorno.sucesso!) {
            response.entidade = retorno.retorno!;
        } else {
            response.sucesso = false;
            response.mensagens = [new MensagemDTO(TipoMensagem.Erro, retorno.mensagem!)];
        }
        return response;
    }
}