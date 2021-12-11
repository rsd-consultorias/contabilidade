export enum TipoMensagem {
    Sucesso = 'SUCESSO',
    Alerta = 'ALERTA',
    Erro = 'ERRO'
}

export class MensagemDTO {
    constructor(tipo: TipoMensagem, descricao: string, identificador?: string){
        this.identificador = identificador;
        this.tipo = tipo;
        this.descricao = descricao;
    }

    public identificador?: string;
    public descricao?: string;
    public tipo?: TipoMensagem;
}