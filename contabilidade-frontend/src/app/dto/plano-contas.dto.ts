export interface PlanoContasDTO {
    id?: string;
    versao?: string;
    dataInicio?: Date;
    dataFim?: Date;
    contas?: Array<ContaVO>;
    planoContasReferencial?: boolean;
}

export interface ContaVO {
    codigo?: string;
    codigoReduzido?: string;
    descricao?: string;
    tipo?: ETipoConta;
    natureza?: ENaturezaConta;
    nivel?: number;
    lancarPorCentroCustos?: boolean;
    idContaPai?: string;
    contas?: Array<ContaVO>;
}

export enum ETipoConta {
    Analitica = 'A',
    Sintetica = 'S'
}

export enum ENaturezaConta {
    ContasAtivo = '01',
    ContasPassivo = '02',
    ContasPatrimonioLiquido = '03',
    ContasResultado = '04',
    ContasCompensacao = '05',
    ContasOutras = '09'
}