import { MoedaDTO } from "../dto/moeda.dto";
import { EntityBase } from "./entity.base";

export class Lancamento extends EntityBase {
    public data?: Date;
    public idLote?: string;
    public historico?: string;
    public complemento?: string;
    public partidas?: Array<PartidaVO>;

    public codigoPlanoContasVigente?: string;
    public idEmpresa?: string;
}

export class PartidaVO {
    public codigoConta?: string;
    public natureza?: ENatureza;
    public valor?: ValorVO;
    public idCentroCustos?: string;
}

export class ValorVO {
    public quantia?: number;
    public moeda?: MoedaDTO;
}

export enum ENatureza {
    Debito = 'D',
    Credito = 'C'
}