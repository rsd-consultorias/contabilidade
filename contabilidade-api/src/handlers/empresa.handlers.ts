import { EmpresaAplicacao } from "core/aplicacao/empresa.aplicacao";
import { Empresa } from "core/entity/empresa.entity";
import express, { Request, Response } from "express";
import { EmpresaRepositoryMongo } from "../infra/repositories/mongo/empresa.repository.mongo";
import { EmpresaVM } from "../view-models/empresa.viewmodel";
import { HttpResponse } from "../view-models/http-response.viewmodel";
import { RequestVM } from "../view-models/request.viewmodel";

export class EmpresaHandlers {
    constructor(
        private empresaAplicacao: EmpresaAplicacao,
        private empresaRepositoryMongo: EmpresaRepositoryMongo) { }

    async getById(req: Request, res: Response) {
        let response = new HttpResponse<EmpresaVM>();
        response.data = await (await this.empresaRepositoryMongo.buscarPorId(req.params.codigo)).retorno;
        res.json(response);
    }

    async get(req: Request, res: Response) {
        let response = new HttpResponse<Array<EmpresaVM>>();
        let filtro = req.body ? req.body : {};
        response.data = await (await this.empresaRepositoryMongo.listarTodos(filtro)).retorno;
        res.json(response);
    }

    async post(req: Request<EmpresaVM>, res: Response) {
        let request: EmpresaVM = req.body as EmpresaVM;
        // @ts-ignore:next-line
        request.usuario = `${req.kauth.grant.access_token.content.preferred_username}:${req.kauth.grant.access_token.content.email}`;
        
        let empresa: Empresa = request;

        let result = await this.empresaAplicacao.cadastrarEmpresa(empresa).then(fulfilled => {
            if (fulfilled.sucesso!) {
                console.log(`Gravar log de auditoria ${JSON.stringify(req.body!)}`);
            }
            return fulfilled;
        });
        res.json(result);
    }

    async put(req: Request, res: Response) {
        let request: EmpresaVM = req.body as EmpresaVM;
        // @ts-ignore:next-line
        request.usuario = `${req.kauth.grant.access_token.content.preferred_username}:${req.kauth.grant.access_token.content.email}`;
        
        let empresa: Empresa = request;

        let response = await this.empresaRepositoryMongo.alterar(empresa)
            .then(fulfilled => {
                if (fulfilled.sucesso!) {
                    console.log(`Gravar log de auditoria ${JSON.stringify(req.body!)}`);
                }
                return fulfilled;
            });

        res.json(response);
    }

    async delete(req: Request, res: Response) {
        let response = this.empresaRepositoryMongo.excluir(req.params.codigo);
        res.json(response);
    }
}