export interface EnderecoVO {
    tipoLogradouro?: string;
    logradouro?: string;
    complemento?: string;
    codigoIbgeMunicipio?: string;
    municipio?: string;
    uf?: string;
    cep?: string;
}

export interface EmpresaDTO {
    id?: string;
    tipoPessoa?: string;
    cpfCnpj?: string;
    nomeRazaoSocial?: string;
    nomeFantasia?: string;
    uf?: string;
    inscricaoEstadual?: string;
    codigoIbgeMunicipio?: string;
    inscricaoMunicipal?: string;
    codigoSituacaoEspecial?: string;
    indicadorSituacaoEspecial?: string;
    indicacaoNire?: string;
    moedaFuncional?: string;
    endereco?: EnderecoVO;
}