import { MensagemDTO } from "core/dto/mensagem.dto";

export class HttpResponse<T = any> {
    public data?: T;
    public status?: number;
    public mensagens?: MensagemDTO[];
}