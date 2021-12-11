import { Component, OnInit } from '@angular/core';
import { IntegracoesService } from 'src/app/services/integracoes.service';

@Component({
  selector: 'app-integracoes',
  templateUrl: './integracoes.component.html',
  styleUrls: ['./integracoes.component.scss']
})
export class IntegracoesComponent implements OnInit {

  origens: any;

  constructor(private integracoesService: IntegracoesService) { }

  ngOnInit(): void {
    this.carregarDados(1);
    console.log(this.origens);
  }

  private carregarDados(pagina: number) {
    this.integracoesService.listarOrigens(pagina).subscribe((data: { quantidade: number; body: any[]; }) => {
      // this.paginaAtual = pagina;
      // this.quantidadePaginas = [];

      for (let a = 1; a <= Math.ceil(data.quantidade / 15); a++) {
        // this.quantidadePaginas.push(a);
      }

      this.origens = data.body;
    });
  }
}
