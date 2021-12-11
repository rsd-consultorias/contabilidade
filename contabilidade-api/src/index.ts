import express from 'express';
import session from 'express-session';
import * as Keycloak from 'keycloak-connect';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import { EmpresaAplicacao } from 'core/aplicacao/empresa.aplicacao';
import { EmpresaRepositoryMongo } from './infra/repositories/mongo/empresa.repository.mongo';
import { EmpresaHandlers } from './handlers/empresa.handlers';
import { PlanoContasHandlers } from './handlers/plano-contas.handlers';
import { PlanoContasRepositoryMongo } from './infra/repositories/mongo/plano-contas.repository';
import { PlanoContasAplicacao } from 'core/aplicacao/plano-contas.aplicacao';

const OAUTH_ROLE_DEFAULT = 'user';
const memoryStore = new session.MemoryStore();
const keycloakConfig: Keycloak.KeycloakConfig = {
    "realm": "contabilidade",
    "auth-server-url": "http://localhost:8080/auth/",
    "ssl-required": "external",
    "resource": "contabilidade",
    "confidential-port": 0
}

const API_PORTA = '4201';
const API_VERSAO = 'v1'
const corsOptions = {
    origin: [
        'http://localhost:4200'
    ]
};

const app = express();
app.use(session({
    secret: 'c241fcf4-ca91-458c-ab1d-5739d30ca437',
    resave: false,
    saveUninitialized: true,
    store: memoryStore
}));
app.use(cors(corsOptions));
app.use(express.json());

var keycloak = new Keycloak.default({
    store: memoryStore
}, keycloakConfig);

app.use(keycloak.middleware({
    logout: '/logout',
    admin: '/'
}));
app.set('trust proxy', true);

let mongoClient: MongoClient;

let empresaRepositoryMongo: EmpresaRepositoryMongo;
let empresaAplicacao: EmpresaAplicacao;
let empresaHandlers: EmpresaHandlers;

let planoContasAplicacao: PlanoContasAplicacao;
let planoContasRepositoryMongo: PlanoContasRepositoryMongo;
let planoContasHandlers: PlanoContasHandlers;

app.get(`/api/`, keycloak.protect('default-roles-mercatorum-contabilidade'), (req, res) => {
    // TODO: Swagger?
    res.send(`Versão: ${API_VERSAO}`);
});

// Empresa
let empresaContext = 'empresa';
app.get(`/api/${API_VERSAO}/${empresaContext}`, async (req, res) => {
    empresaHandlers.get(req, res);
});

app.get(`/api/${API_VERSAO}/${empresaContext}/:codigo`, keycloak.protect(OAUTH_ROLE_DEFAULT), async (req, res) => {
    empresaHandlers.getById(req, res);
});

app.post(`/api/${API_VERSAO}/${empresaContext}/filtro`, keycloak.protect(OAUTH_ROLE_DEFAULT), async (req, res) => {
    empresaHandlers.get(req, res);
});

app.post(`/api/${API_VERSAO}/${empresaContext}`, keycloak.protect(OAUTH_ROLE_DEFAULT), async (req, res) => {
    empresaHandlers.post(req, res);
});

app.put(`/api/${API_VERSAO}/${empresaContext}/:codigo`, keycloak.protect(OAUTH_ROLE_DEFAULT), async (req, res) => {
    empresaHandlers.put(req, res);
});

app.delete(`/api/${API_VERSAO}/${empresaContext}/:codigo`, keycloak.protect(OAUTH_ROLE_DEFAULT), async (req, res) => {
    empresaHandlers.delete(req, res);
});

// Plano de Contas
let planoContasContexto = 'plano-contas';
app.get(`/api/${API_VERSAO}/${planoContasContexto}`, keycloak.protect(OAUTH_ROLE_DEFAULT), async (req, res) => {
    planoContasHandlers.get(req, res);
});

app.post(`/api/${API_VERSAO}/${planoContasContexto}/filtro`, keycloak.protect(OAUTH_ROLE_DEFAULT), async (req, res) => {
    planoContasHandlers.get(req, res);
});

app.post(`/api/${API_VERSAO}/${planoContasContexto}`, keycloak.protect(OAUTH_ROLE_DEFAULT), async (req, res) => {
    planoContasHandlers.post(req, res);
});

app.put(`/api/${API_VERSAO}/${planoContasContexto}/:codigo`, keycloak.protect(OAUTH_ROLE_DEFAULT), async (req, res) => {
    planoContasHandlers.put(req, res);
});

app.delete(`/api/${API_VERSAO}/${planoContasContexto}/:codigo`, keycloak.protect(OAUTH_ROLE_DEFAULT), async (req, res) => {
    planoContasHandlers.delete(req, res);
});

// Lançamento
let lancamentoContexto = 'lancamento';
app.get(`/api/${API_VERSAO}/${lancamentoContexto}`, keycloak.protect(OAUTH_ROLE_DEFAULT), async (req, res) => {
    res.end()
});

app.post(`/api/${API_VERSAO}/${lancamentoContexto}/filtro`, keycloak.protect(OAUTH_ROLE_DEFAULT), async (req, res) => {
    res.end()
});

app.post(`/api/${API_VERSAO}/${lancamentoContexto}`, keycloak.protect(OAUTH_ROLE_DEFAULT), async (req, res) => {
    res.end()
});

app.put(`/api/${API_VERSAO}/${lancamentoContexto}/:codigo`, keycloak.protect(OAUTH_ROLE_DEFAULT), async (req, res) => {
    res.end()
});

app.delete(`/api/${API_VERSAO}/${lancamentoContexto}/:codigo`, keycloak.protect(OAUTH_ROLE_DEFAULT), async (req, res) => {
    res.end()
});

// Cadastro de lote
let lotesContexto = 'lote';
app.get(`/api/${API_VERSAO}/${lotesContexto}`, keycloak.protect(OAUTH_ROLE_DEFAULT), async (req, res) => {
    res.end()
});

app.post(`/api/${API_VERSAO}/${lotesContexto}/filtro`, keycloak.protect(OAUTH_ROLE_DEFAULT), async (req, res) => {
    res.end()
});

app.post(`/api/${API_VERSAO}/${lotesContexto}`, keycloak.protect(OAUTH_ROLE_DEFAULT), async (req, res) => {
    res.end()
});

app.put(`/api/${API_VERSAO}/${lotesContexto}/:codigo`, keycloak.protect(OAUTH_ROLE_DEFAULT), async (req, res) => {
    res.end()
});

app.delete(`/api/${API_VERSAO}/${lotesContexto}/:codigo`, keycloak.protect(OAUTH_ROLE_DEFAULT), async (req, res) => {
    res.end()
});

// Cadastro de centro de custos
let centroCustosContexto = 'centro-custos';
app.get(`/api/${API_VERSAO}/${centroCustosContexto}`, keycloak.protect(OAUTH_ROLE_DEFAULT), async (req, res) => {
    res.end()
});

app.post(`/api/${API_VERSAO}/${centroCustosContexto}/filtro`, keycloak.protect(OAUTH_ROLE_DEFAULT), async (req, res) => {
    res.end()
});

app.post(`/api/${API_VERSAO}/${centroCustosContexto}`, keycloak.protect(OAUTH_ROLE_DEFAULT), async (req, res) => {
    res.end()
});

app.put(`/api/${API_VERSAO}/${centroCustosContexto}/:codigo`, keycloak.protect(OAUTH_ROLE_DEFAULT), async (req, res) => {
    res.end()
});

app.delete(`/api/${API_VERSAO}/${centroCustosContexto}/:codigo`, keycloak.protect(OAUTH_ROLE_DEFAULT), async (req, res) => {
    res.end()
});

// Demonstrações
let demonstracaoContexto = 'demonstracao';
app.post(`/api/${API_VERSAO}/${demonstracaoContexto}/livro-diario`, keycloak.protect(OAUTH_ROLE_DEFAULT), async (req, res) => {
    res.end()
});

app.post(`/api/${API_VERSAO}/${demonstracaoContexto}/livro-caixa`, keycloak.protect(OAUTH_ROLE_DEFAULT), async (req, res) => {
    res.end()
});

app.post(`/api/${API_VERSAO}/${demonstracaoContexto}/livro-razao`, keycloak.protect(OAUTH_ROLE_DEFAULT), async (req, res) => {
    res.end()
});

app.post(`/api/${API_VERSAO}/${demonstracaoContexto}/balancete`, keycloak.protect(OAUTH_ROLE_DEFAULT), async (req, res) => {
    res.end()
});

app.post(`/api/${API_VERSAO}/${demonstracaoContexto}/balanco-patrimonial`, keycloak.protect(OAUTH_ROLE_DEFAULT), async (req, res) => {
    res.end()
});

app.post(`/api/${API_VERSAO}/${demonstracaoContexto}/demonstrativo-resultado`, keycloak.protect(OAUTH_ROLE_DEFAULT), async (req, res) => {
    res.end()
});

app.post(`/api/${API_VERSAO}/${demonstracaoContexto}/mutacao-patrimonio-liquido`, keycloak.protect(OAUTH_ROLE_DEFAULT), async (req, res) => {
    res.end()
});

app.post(`/api/${API_VERSAO}/${demonstracaoContexto}/demonstrativo-lucros-perdas`, async (req, res) => {
    res.end()
});

// SPED?
let spedContexto = 'sped';
app.post(`/api/${API_VERSAO}/${spedContexto}`, keycloak.protect(OAUTH_ROLE_DEFAULT), async (req, res) => {
    res.end()
});

// Listener
app.listen(API_PORTA, async () => {
    // let a = keycloak.

    // mongoClient = await MongoClient.connect('mongodb+srv://mercatorum:mercatorum@cluster0.rnzhd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
    mongoClient = await MongoClient.connect('mongodb://localhost:27017/contabilidade?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false');

    empresaRepositoryMongo = new EmpresaRepositoryMongo(mongoClient);
    empresaAplicacao = new EmpresaAplicacao(empresaRepositoryMongo);
    empresaHandlers = new EmpresaHandlers(empresaAplicacao, empresaRepositoryMongo);

    planoContasRepositoryMongo = new PlanoContasRepositoryMongo(mongoClient);
    planoContasAplicacao = new PlanoContasAplicacao(planoContasRepositoryMongo);
    planoContasHandlers = new PlanoContasHandlers(planoContasAplicacao, planoContasRepositoryMongo);

    console.log(`Escutando porta ${API_PORTA}`);
});


// app.get(`/api/${API_VERSAO}/saldo-contabil`, async (req, res) => {
//     let saldoContabil: { [conta: string]: ContaContabil } = {};
//     let planoContas = await (await planoContasRepository.listar(0)).body;
//     planoContas.forEach(conta => {
//         conta.saldo = { debito: 0, credito: 0, saldo: 0 };
//         saldoContabil[conta.codigo!] = conta;
//     });

//     let atualizarSaldo = (codigoConta: string, saldoAtual: number) => {
//         if (saldoContabil[codigoConta]) {
//             saldoContabil[codigoConta].saldo!.saldo! += saldoAtual;
//             if (saldoContabil[codigoConta].contaPai) {
//                 atualizarSaldo(saldoContabil[codigoConta].contaPai!, saldoAtual);
//             }
//         }
//     }

//     (await movimentoRepository.listarTodos(0)).body.forEach(movimento => {
//         movimento.contabilizacao?.forEach(partida => {

//             // #
//             if (partida.natureza! == 'D') {
//                 saldoContabil[partida.conta!].saldo!.saldo! += partida.valor?.quantia!;
//                 atualizarSaldo(saldoContabil[partida.conta!].contaPai!, partida.valor?.quantia!);
//             } else {
//                 saldoContabil[partida.conta!].saldo!.saldo! -= partida.valor?.quantia!;
//                 atualizarSaldo(saldoContabil[partida.conta!].contaPai!, -partida.valor?.quantia!);
//             }
//         });
//     });

//     let balancoPatrimonial: { [natureza: string]: Array<ContaContabil> } = {};
//     planoContas.forEach(conta => {
//         if (!balancoPatrimonial[conta.codigoNatureza!]) {
//             balancoPatrimonial[conta.codigoNatureza!] = new Array<ContaContabil>();
//         }
//         conta.saldo = saldoContabil[conta.codigo!].saldo;
//         if (conta.saldo && conta.saldo?.saldo! != 0) {
//             balancoPatrimonial[conta.codigoNatureza!].push(conta);
//         }
//     });

//     // Indicadores
//     let liquidezCorrente = Math.abs(saldoContabil['1.1'].saldo!.saldo / saldoContabil['2.1'].saldo!.saldo).toFixed(2);
//     let endividamentoTotal = Math.abs(
//         ((saldoContabil['2.1'].saldo!.saldo + saldoContabil['2.2'].saldo!.saldo) /
//             (saldoContabil['1'].saldo!.saldo)) * 100).toFixed(2);

//     res.json({
//         atualizacao: new Date(),
//         ativo: balancoPatrimonial['01'],
//         passivo: balancoPatrimonial['02'],
//         patrimonioLiquido: balancoPatrimonial['03'],
//         contaResultado: balancoPatrimonial['04'],
//         indicadores: {
//             liquidezCorrente: liquidezCorrente,
//             endividamentoTotal: endividamentoTotal
//         }
//     });
// });