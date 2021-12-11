import { IEvento } from "./itransacao";

export interface IMovimentoContabilModel {
    codigo: string;
    codigoLancamento: string;
    data: Date;
    codigoLote: string;
    descricaoLote: string;
    contabilizacao: Array<IEvento>;
    historico: string;
    complemento: string;
}