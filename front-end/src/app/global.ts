export interface IPeriodoContabil {
    ano: string;
    mes: string;
}

export const constantesGlobais = {
    periodoContabil: { ano: '2021', mes: '11' } as IPeriodoContabil,
    mensagens: new Array<string>(),
}