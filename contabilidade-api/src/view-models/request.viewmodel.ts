import { AuditoriaDTO } from "../dto/auditoria.dto";

export class RequestVM<T> {
    auditoria?: AuditoriaDTO;
    model?: T;
}

export class ResponseVM<T> {
    model?: T;
}