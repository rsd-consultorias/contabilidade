export const globalVars = {
    storeEmpresa: (cnpj: string, razaoSocial: string) => {
        localStorage.setItem('cnpj', cnpj);
        localStorage.setItem('razao-social', razaoSocial);
    },
    getEmpresa: () => {
        return {
            cnpj: localStorage.getItem('cnpj')!,
            razaoSocial: localStorage.getItem('razao-social')!
        };
    },
    storeIdEmpresa: (id: string) => {
        localStorage.setItem('id-empresa', id);
    },
    getIdEmpresa: (): string => {
        return localStorage.getItem('id-empresa')!;
    }
}

