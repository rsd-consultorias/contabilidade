import { CentroCustos } from "core/entity/centro-custos.entity";
import { Request, Response } from "express";
import { CentroCustosRepositoryMongo } from "../infra/repositories/mongo/centro-custos.repository.mongo";
import { HttpResponse } from "../view-models/http-response.viewmodel";

export class CentrosCustosHandlers {
    constructor(private centrosCustosRepositoryMongo: CentroCustosRepositoryMongo) { }

    async getById(req: Request, res: Response) {
        let response = new HttpResponse<CentroCustos>();
        response.data = await (await this.centrosCustosRepositoryMongo.buscarPorId(req.params.codigo)).retorno;
        res.json(response);
    }

    async get(req: Request, res: Response) {
        let response = new HttpResponse<Array<CentroCustos>>();
        let filtro = req.body ? req.body : {};
        response.data = await (await this.centrosCustosRepositoryMongo.listarTodos(filtro)).retorno;
        res.json(response);
    }

    async post(req: Request, res: Response) {
        let centroCustos = req.body as CentroCustos;
        
        try {
            
        } catch (error) {
            res.json(error);
        }
    }

    async put(req: Request, res: Response) {
        let centroCustos = req.body as CentroCustos;
        centroCustos.id = req.params.codigo;
        let response = await this.centrosCustosRepositoryMongo.alterar(centroCustos);

        res.json(response);
    }

    async delete(req: Request, res: Response) {
        let response = this.centrosCustosRepositoryMongo.excluir(req.params.codigo);
        res.json(response);
    }
}