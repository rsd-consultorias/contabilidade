import { Component, OnInit } from '@angular/core';
import { EmpresaDTO, EnderecoVO } from 'src/app/dto/empresa.dto';
import { EmpresaService } from 'src/app/services/empresa.service';
import { globalVars } from 'src/app/shared/global-variables';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent implements OnInit {
  empresa: EmpresaDTO = {};

  constructor(private empresaService: EmpresaService) { }

  ngOnInit(): void {
    this.carregarEmpresa();
  }

  carregarEmpresa() {
    this.empresaService.buscarPorId(globalVars.getIdEmpresa())
      .subscribe(res => {
        this.empresa = res.data!;
        if (!this.empresa.endereco) {
          this.empresa.endereco = {};
        }
      });
  }

  salvar() {
    this.empresaService.salvar(this.empresa);
    return false;
  }
}
