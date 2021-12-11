import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaService } from 'src/app/services/empresa.service';
import { globalVars } from 'src/app/shared/global-variables';

@Component({
  selector: 'app-login-callback',
  templateUrl: './login-callback.component.html',
  styleUrls: ['./login-callback.component.scss']
})
export class LoginCallbackComponent implements OnInit {

  constructor(
    private empresaService: EmpresaService,
    private router: Router) {
  }

  async ngOnInit() {
    await this.escolherEmpresa();
  }

  async escolherEmpresa(): Promise<void> {
    globalVars.storeIdEmpresa('fd26ed9c-6f65-40e4-a8f4-49a4c96ae369');
    let empresa = this.empresaService.buscarPorId(globalVars.getIdEmpresa());
    empresa.subscribe(res => {
      globalVars.storeEmpresa(res.data!.cpfCnpj!, res.data!.nomeRazaoSocial!);
      this.router.navigate(['/']);
    });
  }
}
