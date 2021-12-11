import { EntityBase } from "./entity.base";

export class Empresa extends EntityBase {
    public tipoPessoa?: string;
    public cpfCnpj?: string;
    public nomeRazaoSocial?: string;
    public nomeFantasia?: string;
    public uf?: string;
    public inscricaoEstadual?: string;
    public codigoIbgeMunicipio?: string;
    public inscricaoMunicipal?: string;
    public codigoSituacaoEspecial?: string;
    public indicadorSituacaoEspecial?: string;
    public indicacaoNire?: string;
    public moedaFuncional?: string;

    public endereco?: EnderecoVO;

    public idPlanoContasVigente?: string;
    public idEmpresaMatriz?: string;
}

export class EnderecoVO {
    tipoLogradouro?: string;
    logradouro?: string;
    complemento?: string;
    codigoIbgeMunicipio?: string;
    municipio?: string;
    uf?: string;
    cep?: string;
}