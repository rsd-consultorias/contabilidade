import { Component, OnInit } from '@angular/core';
import { IDadosFiscaisViewModel, MoedaVO } from 'src/app/models/dados-fiscais.model';
import { DadosFiscaisService } from 'src/app/services/dados-fiscais.service';
import { MensagensService } from 'src/app/services/mensagens.service';

@Component({
  selector: 'app-dados-fiscais',
  templateUrl: './dados-fiscais.component.html',
  styleUrls: ['./dados-fiscais.component.scss']
})
export class DadosFiscaisComponent implements OnInit {

  dadosFiscais: IDadosFiscaisViewModel = { moedaFuncional: {} as MoedaVO } as IDadosFiscaisViewModel;
  labelCpfCnpj: string = 'CNPJ';
  labelNomeRazaoSocial: string = 'Razão Social';

  constructor(private dadosFiscaisService: DadosFiscaisService,
    private mensagensService: MensagensService) { }

  ngOnInit(): void {
    this.buscarPorCodigo('6d1f1630-99de-4b5f-8f75-7d60703416f8');
  }

  async salvar() {
    this.dadosFiscais = await this.dadosFiscaisService.salvar(this.dadosFiscais);
  }

  async buscarPorCodigo(codigo: string) {
    this.dadosFiscais = await this.dadosFiscaisService.buscarPorCodigo(codigo);
    this.tipoPessoaSelected();
  }

  tipoPessoaSelected() {
    if (this.dadosFiscais.tipoPessoa == 'PJ') {
      this.labelCpfCnpj = 'CNPJ';
      this.labelNomeRazaoSocial = 'Razão Social';
    } else {
      this.labelCpfCnpj = 'CPF';
      this.labelNomeRazaoSocial = 'Nome';
    }
  }
}
