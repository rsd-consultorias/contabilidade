import { AuditoriaDTO } from "./auditoria.dto";

export class RequestDTO<T> {
    constructor() {
        this.auditoria = new AuditoriaDTO();
        this.auditoria.data = new Date();
    }
    model?: T;
    auditoria: AuditoriaDTO;
}