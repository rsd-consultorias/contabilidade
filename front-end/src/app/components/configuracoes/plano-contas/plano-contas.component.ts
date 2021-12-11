import { Component, OnInit } from '@angular/core';
import { IContaContabil, IPlanoContas } from 'src/app/models/itransacao-config.model';
import { PlanoContasService } from 'src/app/services/plano-contas.service';

@Component({
  selector: 'app-plano-contas',
  templateUrl: './plano-contas.component.html',
  styleUrls: ['./plano-contas.component.scss']
})
export class PlanoContasComponent implements OnInit {
  quantidadePaginas: Array<Number> = [];
  paginaAtual: number = 1;

  planoContas: Array<IContaContabil> = [];
  contaAtual: IContaContabil = {} as IContaContabil;

  constructor(private _planoContasService: PlanoContasService) { }

  ngOnInit(): void {
    this.carregarDados(0);

    console.log(this.planoContas);
  }

  private carregarDados(pagina: number) {
    this.planoContas = new Array<IContaContabil>();

    this._planoContasService.listarPlanoContas(pagina)
      .subscribe((data: { quantidade: number; body: Array<IContaContabil> }) => {
        this.paginaAtual = pagina;
        this.quantidadePaginas = [];

        for (let a = 1; a <= Math.ceil(data.quantidade / 15); a++) {
          this.quantidadePaginas.push(a);
        }

        this.planoContas = data.body;
      });
}

  public editar(conta: IContaContabil) {
    this.contaAtual = conta;
  }

  public salvar() {
    this.contaAtual = {} as IContaContabil;
  }

  public navegar(pagina: number) {
    this.carregarDados(0);
  }

  public avancar(pagina: number) {
    this.navegar(this.paginaAtual + pagina);
  }
}
