export interface IStandardResponse<T> {
    status: string;
    mensagem: string;
    pagina: number;
    quantidade: number;
    protocolo: string;
    body: T;
    registros: T;
}