import { MensagemDTO } from "./mensagem.dto";

export class ResponseDTO<T = any> {
    entidade?: T;
    mensagens?: Array<MensagemDTO>;
    sucesso: boolean = true;
}