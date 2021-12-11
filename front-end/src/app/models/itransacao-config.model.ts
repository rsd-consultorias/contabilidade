export interface IOrigemConfig {
    codigoOrigem: string;
    nomeOrigem: string;
    habilitado: boolean;
    acao: number;
    transacoes: Array<ITransacaoConfig>;
    apiKey: string;
    apiSecret: string;
}

export interface IEventoConfig {
    codigo: string;
    descricao: string;
    natureza: number;
    contabilizacao: Array<IEventoContabilizacao>;
    indice: number;
}

export interface ITransacaoConfig {
    codigoTransacao: string;
    descricao: string;
    eventos: Array<IEventoConfig>;
    indice: number;
}

export interface IEventoContabilizacao {
    contaContabil: string;
    natureza: number;
    indice: number;
}

export interface IContaContabil {
    _id: string;
    codigo: string;
    codigoNatureza: string;
    descricao: string;
    natureza: number;
    nivel: number;
    contaAnalitica: boolean;
    indice: number;
    lancarPorCentroCustos: boolean;
    conta: Array<IContaContabil>;
    contaPai: string;
}

export interface IPlanoContas {
    versao: string;
    contas: Array<IContaContabil>;
}