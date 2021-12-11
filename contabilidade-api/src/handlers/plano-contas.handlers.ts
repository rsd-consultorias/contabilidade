import { PlanoContasAplicacao } from "core/aplicacao/plano-contas.aplicacao";
import { PlanoContas } from "core/entity/plano-contas.entity";
import { Request, Response } from "express";
import { PlanoContasRepositoryMongo } from "../infra/repositories/mongo/plano-contas.repository";
import { HttpResponse } from "../view-models/http-response.viewmodel";

export class PlanoContasHandlers {
    constructor(
        private planoContasAplicacao: PlanoContasAplicacao,
        private planoContasRepositoryMongo: PlanoContasRepositoryMongo) { }

    async get(req: Request, res: Response) {
        let response = new HttpResponse<Array<PlanoContas>>();
        let filtro = req.body ? req.body : {};
        response.data = await (await this.planoContasRepositoryMongo.listarTodos(filtro)).retorno;

        res.json(response);
    }

    async post(req: Request, res: Response) {
        let planoContas: PlanoContas = req.body;
        try {
            let result = await this.planoContasAplicacao.criarPlanoContas(planoContas);

            res.json(result);
        } catch (error) {
            res.json(error);
        }
    }

    async put(req: Request, res: Response) {
        let planoContas: PlanoContas = new PlanoContas();
        let response = await this.planoContasRepositoryMongo.alterar(planoContas);

        res.json(response);
    }

    async delete(req: Request, res: Response) {
        let response = this.planoContasRepositoryMongo.excluir(req.params.codigo);

        res.json(response);
    }
}