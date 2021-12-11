import { MensagemDTO, TipoMensagem } from "../dto/mensagem.dto";

export class AplicacaoBase {
    private mensagens?: Array<MensagemDTO> = [];

    adicionarMensagem(mensagem: MensagemDTO) {
        this.mensagens!.push(mensagem);
    }

    adicionarMensagens(mensagens: Array<MensagemDTO>) {
        mensagens.forEach(mensagem => {
            this.mensagens!.push(mensagem);
        });
    }

    listarMensagens(): Array<MensagemDTO> {
        return this.mensagens!;
    }

    limparMensagens() {
        this.mensagens = [];
    }

    temErros(): boolean {
        let temErros = false;
        this.listarMensagens().forEach(msg => {
            if (msg.tipo! == TipoMensagem.Erro) {
                temErros = true;
            }
        });
        return temErros;
    }
}
