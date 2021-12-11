import { MensagemDTO, TipoMensagem } from "../dto/mensagem.dto";
import { ResponseDTO } from "../dto/response.dto";
import { PlanoContas } from "../entity/plano-contas.entity";
import { IPlanoContasRepository } from "../repository/plano-contas.repository";
import { AplicacaoBase } from "./aplicacao.base";

export class PlanoContasAplicacao extends AplicacaoBase {
    constructor(private planoContasRepository: IPlanoContasRepository) {
        super();
    }

    async criarPlanoContas(planoContas: PlanoContas): Promise<ResponseDTO<PlanoContas>> {
        let response = new ResponseDTO<PlanoContas>();
        response.entidade = planoContas;

        let result = await this.planoContasRepository.inserir(planoContas);
        if (!result.sucesso!) {
            response.sucesso = false;
            response.mensagens = [new MensagemDTO(TipoMensagem.Erro, result.mensagem!)];
        }

        return response;
    }

    async alterarPlanoContas(planoContas: PlanoContas): Promise<ResponseDTO<PlanoContas>> {
        let response = new ResponseDTO<PlanoContas>();
        response.entidade = planoContas;

        let result = await this.planoContasRepository.alterar(planoContas);
        if (!result.sucesso!) {
            response.sucesso = false;
            response.mensagens = [new MensagemDTO(TipoMensagem.Erro, result.mensagem!)];
        }

        return response;
    }
}