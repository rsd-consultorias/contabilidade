import { Empresa } from "core/entity/empresa.entity";
import { AuditoriaDTO } from "../dto/auditoria.dto";

export class EmpresaVM extends Empresa {
    auditoria?: AuditoriaDTO;
}