import { PlanoContas } from 'core/entity/plano-contas.entity';
import { IPlanoContasRepository } from 'core/repository/plano-contas.repository';
import { RespositoryResponse } from 'core/repository/repository.base';
import { Collection, MongoClient } from 'mongodb';
import { v4 } from 'uuid';
import { constantes } from '../../../utils/contantes';
export class PlanoContasRepositoryMongo implements IPlanoContasRepository {
    private collection?: Collection<PlanoContas>;

    constructor(private mongoClient: MongoClient) {
        this.collection = this.mongoClient.db(constantes.MONGO_DBNAME).collection<PlanoContas>(constantes.MONGO_COLLECTION_PLANOCONTAS);
    }
    
    async buscarPorId(id: string): Promise<RespositoryResponse<PlanoContas>> {
        throw new Error('Method not implemented.');
    }

    async inserir(entidade: PlanoContas): Promise<RespositoryResponse<PlanoContas>> {
        let response: RespositoryResponse<PlanoContas> = {};
        // @ts-ignore:next-line
        delete entidade.mensagens;
        // @ts-ignore:next-line
        delete entidade.validacoes;
        entidade.id = v4();

        let result = await this.collection!.insertOne(entidade);

        if (!result.acknowledged) {
            response.mensagem = "Plano de contas não inserido.";
            response.sucesso = false;
        } else {
            response.sucesso = true;
            // @ts-ignore:next-line
            delete entidade!._id;
            response.retorno = entidade;
        }

        return response;
    }

    async alterar(entidade: PlanoContas): Promise<RespositoryResponse<PlanoContas>> {
        let response: RespositoryResponse<PlanoContas> = {};
        // @ts-ignore:next-line
        delete entidade.mensagens;
        // @ts-ignore:next-line
        delete entidade.validacoes;

        let result = await this.collection!.updateOne({ id: entidade.id! }, { $set: entidade });

        response.retorno = entidade;

        if (result.modifiedCount > 0 || result.matchedCount > 0) {
            response.sucesso = true;
            // @ts-ignore:next-line
            delete entidade!._id;
        } else {
            response.mensagem = `Empresa não atualizada.`;
            response.sucesso = false;
        }

        // @ts-ignore:next-line
        delete entidade!._id;

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

    async listarTodos(filtro: any): Promise<RespositoryResponse<PlanoContas[]>> {
        let response: RespositoryResponse<Array<PlanoContas>> = {};
        response.retorno = [];
        await this.collection!.find(filtro).forEach(item => {
            // @ts-ignore:next-line
            delete item!._id;
            response.retorno?.push(item);
        });
        return response;
    }
}