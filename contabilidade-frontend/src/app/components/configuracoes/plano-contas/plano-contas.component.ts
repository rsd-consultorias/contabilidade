import { Component, OnInit } from '@angular/core';
import { PlanoContasDTO } from 'src/app/dto/plano-contas.dto';
import { PlanoContasService } from 'src/app/services/plano-contas.service';

@Component({
  selector: 'app-plano-contas',
  templateUrl: './plano-contas.component.html',
  styleUrls: ['./plano-contas.component.scss']
})
export class PlanoContasComponent implements OnInit {
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
}
