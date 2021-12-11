import { Component, OnInit } from '@angular/core';
import { ContaVO, PlanoContasDTO } from 'src/app/dto/plano-contas.dto';
import { PlanoContasService } from 'src/app/services/plano-contas.service';

@Component({
  selector: 'app-plano-contas-home',
  templateUrl: './plano-contas-home.component.html',
  styleUrls: ['./plano-contas-home.component.scss']
})
export class PlanoContasHomeComponent implements OnInit {
  listaPlanocontas: Array<PlanoContasDTO> = [];
  planoContas: PlanoContasDTO = {};

  constructor(private planoContasService: PlanoContasService) { }

  ngOnInit(): void {
    this.carregar();
  }

  selecionarPlanoContas(planoContas: PlanoContasDTO) {
    this.planoContas = planoContas;
  }

  carregar() {
    this.planoContasService.listarTodos()
      .subscribe(data => {
        this.listaPlanocontas = data.data!;
      });
  }

  adicionarContaAcima(contaPai?: ContaVO, contaFilha?: ContaVO) {
    alert('Conta acima')
  }

  adicionarContaAbaixo(contaPai?: ContaVO, contaFilha?: ContaVO) {
    alert('Conta abaixo')
  }
}
