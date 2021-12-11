import { DinheiroVO } from "./itransacao";

export class MoedaVO {
    nome: string | undefined;
    codigo: string | undefined;
    simbolo: string | undefined;
    cotacao: DinheiroVO | undefined;
}

export interface IDadosFiscaisViewModel {
    codigo: string;
    tipoPessoa: string;
    cpfCnpj: string;
    nomeRazaoSocial: string;
    uf: string;
    inscricaoEstadual: string;
    codigoIbgeMunicipio: string;
    inscricaoMunicipal: string;
    codigoSituacaoEspecial: string;
    indicadorSituacaoEspecial: string;
    indicacaoNire: string;
    moedaFuncional: MoedaVO;
}