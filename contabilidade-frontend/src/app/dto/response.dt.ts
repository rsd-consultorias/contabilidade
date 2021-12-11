export class ResponseDTO<T> {
    data?: T;
    retorno?: T;
    sucesso?: boolean;
    mensagem?: string;
}