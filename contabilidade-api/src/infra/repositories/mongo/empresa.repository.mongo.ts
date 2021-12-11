import { RespositoryResponse } from "core/repository/repository.base";
import { Callback, Collection, DeleteResult, InsertOneResult, MongoClient, UpdateResult } from "mongodb";
import { v4 } from "uuid";
import { Empresa } from "../../../../../core/build/entity/empresa.entity";
import { IEmpresaRepository } from "../../../../../core/build/repository/empresa.repository";
import { constantes } from "../../../utils/contantes";

export class EmpresaRepositoryMongo implements IEmpresaRepository {
    private collection?: Collection<Empresa>;

    constructor(private mongoClient: MongoClient) {
        this.collection = this.mongoClient.db(constantes.MONGO_DBNAME).collection<Empresa>(constantes.MONGO_COLLECTION_EMPRESAS);
    }

    async buscarPorId(id: string): Promise<RespositoryResponse<Empresa>> {
        let response: RespositoryResponse<Empresa> = {};
        await this.collection!.find({ id: id }).forEach(item => {
            // @ts-ignore:next-line
            delete item!._id;
            response.retorno = item;
        });
        return response;
    }

    async inserir(empresa: Empresa): Promise<RespositoryResponse<Empresa>> {
        let response: RespositoryResponse<Empresa> = {};
        // @ts-ignore:next-line
        delete empresa.mensagens;
        // @ts-ignore:next-line
        delete empresa.validacoes;
        empresa.id = v4();

        let result = await this.collection!.insertOne(empresa);

        if (!result.acknowledged) {
            response.mensagem = "Empresa não inserida.";
            response.sucesso = false;
        } else {
            response.sucesso = true;
            // @ts-ignore:next-line
            delete empresa!._id;
            response.retorno = empresa;
        }

        return response;
    }

    async alterar(empresa: Empresa): Promise<RespositoryResponse<Empresa>> {
        let response: RespositoryResponse<Empresa> = {};
        // @ts-ignore:next-line
        delete empresa.mensagens;
        // @ts-ignore:next-line
        delete empresa.validacoes;
        // @ts-ignore:next-line
        delete empresa.auditoria;

        let result = await this.collection!.updateOne({ id: empresa.id! }, { $set: empresa });

        response.retorno = empresa;

        if (result.modifiedCount > 0 || result.matchedCount > 0) {
            response.sucesso = true;
            // @ts-ignore:next-line
            delete empresa!._id;
        } else {
            response.mensagem = `Empresa não atualizada.`;
            response.sucesso = false;
        }

        // @ts-ignore:next-line
        delete empresa!._id;

        return response;
    }

    async excluir(id: string): Promise<RespositoryResponse<undefined>> {
        let response: RespositoryResponse<undefined> = {};
        let result = await this.collection!.deleteOne({ id: id });

        if (result.deletedCount == 0) {
            response.mensagem = "Empresa não excluída.";
            response.sucesso = false;
        } else {
            response.sucesso = true;
        }
        return response;
    }

    async listarTodos(filtro: any): Promise<RespositoryResponse<Array<Empresa>>> {
        let response: RespositoryResponse<Array<Empresa>> = {};
        response.retorno = [];
        await this.collection!.find(filtro).forEach(item => {
            // @ts-ignore:next-line
            delete item!._id;
            response.retorno?.push(item);
        });
        return response;
    }
}