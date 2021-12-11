import { Injectable } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Injectable({
  providedIn: 'root'
})
export class MensagensService {

  public mensagem: string = '';
  constructor() { }

  mensagemSucesso(mensagem: string) {
    this.mensagem = mensagem;
    let toast = document.getElementById('liveToast');
    let toastObj = new bootstrap.Toast(toast!);
    toastObj.show();
  }

  mensagemAlerta(mensagem: string) {
    this.mensagem = mensagem;
    let toast = document.getElementById('liveToastAlert');
    let toastObj = new bootstrap.Toast(toast!);
    toastObj.show();
  }
}
