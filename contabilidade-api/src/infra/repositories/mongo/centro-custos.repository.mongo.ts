import { RespositoryResponse } from "core/repository/repository.base";
import { Collection, MongoClient } from "mongodb";
import { CentroCustos } from "../../../../../core/build/entity/centro-custos.entity";
import { ICentroCustosRepository } from "../../../../../core/build/repository/centro-custos.repository";
import { constantes } from "../../../utils/contantes";

export class CentroCustosRepositoryMongo implements ICentroCustosRepository {
    private collection?: Collection<CentroCustos>;

    constructor(private mongoClient: MongoClient) {
        this.collection = this.mongoClient.db(constantes.MONGO_DBNAME).collection<CentroCustos>(constantes.MONGO_COLLECTION_CENTROS_CUSTOS);
    }
    
    buscarPorId(id: string): Promise<RespositoryResponse<CentroCustos>> {
        throw new Error("Method not implemented.");
    }

    inserir(entidade: CentroCustos): Promise<RespositoryResponse<CentroCustos>> {
        throw new Error("Method not implemented.");
    }

    alterar(entidade: CentroCustos): Promise<RespositoryResponse<CentroCustos>> {
        throw new Error("Method not implemented.");
    }

    excluir(id: string): Promise<RespositoryResponse<undefined>> {
        throw new Error("Method not implemented.");
    }

    listarTodos(filtro: any): Promise<RespositoryResponse<CentroCustos[]>> {
        throw new Error("Method not implemented.");
    }
}