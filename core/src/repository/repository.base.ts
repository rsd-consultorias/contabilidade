export class RespositoryResponse<T> {
    public sucesso?: boolean;
    public retorno?: T;
    public mensagem?: string;
}

export interface IRepositoryBase<T> {
    buscarPorId(id: string): Promise<RespositoryResponse<T>>;

    inserir(entidade: T): Promise<RespositoryResponse<T>>;
    alterar(entidade: T): Promise<RespositoryResponse<T>>;
    excluir(id: string): Promise<RespositoryResponse<undefined>>;

    listarTodos(filtro: any): Promise<RespositoryResponse<Array<T>>>;
}
