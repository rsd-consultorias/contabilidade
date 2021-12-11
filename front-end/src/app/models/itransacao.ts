import { IContaContabil } from "./itransacao-config.model";

export class DinheiroVO {
    public quantia: number | undefined;
    public moeda: string | undefined;
    public formatado: string | undefined;
}

export interface IEvento {
    codigo: string;
    natureza: string;
    valor: DinheiroVO;
    conta: IContaContabil;
    centroCustos: string;
}

export interface ITransacao {
    codigoOrigem: string;
    protocolo: string;
    codigoTransacao: string;
    data: Date;
    historico: string;
    status: string;
    eventos: IEvento[];
}
