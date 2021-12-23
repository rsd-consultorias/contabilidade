import { Auditavel } from "../interfaces/auditavel.base";

export class EmpresaVM extends Auditavel<EmpresaVM> {
    
    constructor() {
        super();
    }

    cnpj?: string;
}