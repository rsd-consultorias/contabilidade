export class Auditavel<TModel> {
    id?: string;
    data?: Date;
    usuario?: string;
    recurso?: string;
    mensagem?: string;
    original?: TModel;
}