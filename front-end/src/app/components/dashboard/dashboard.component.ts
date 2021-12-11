import { Component, OnInit } from '@angular/core';
// import { BarController, BarElement, CategoryScale, Chart, LinearScale, LineController, LineElement, PointElement, Title } from 'chart.js';
import { PlanoContasService } from 'src/app/services/plano-contas.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  balancoPatrimonial: any = {};
  nivelBalancoPatrimonial = 3;
  dataAtualizacao: Date | undefined;

  constructor(private planoContasService: PlanoContasService) { }

  ngOnInit(): void {
    this.atualizarDashboard();
    setInterval(() => {
      this.atualizarDashboard();
    }, 30000);

    console.log(JSON.stringify(this.balancoPatrimonial));

    // var ctx = document.getElementById("myChart") as HTMLCanvasElement;
    // Chart.register(BarController, BarElement, LineController, LineElement, PointElement, LinearScale, CategoryScale, Title);

    // var _ = new Chart(ctx, {
    //   type: "bar",
    //   data: {
    //     labels: [
    //       'Cadastro',
    //       'Ficha Cadastral',
    //       'Documentação',
    //       'Escolha do Lote',
    //       'Pagamento',
    //       'Finalizado'
    //     ],
    //     datasets: [{
    //       label: 'Novos',
    //       data: [
    //         24,
    //         12,
    //         8,
    //         18,
    //         13,
    //         8
    //       ],
    //       backgroundColor: [
    //         'rgba(223, 42, 42, 0.6)',
    //         'rgba(253, 164, 44, 0.6)',
    //         'rgba(253, 164, 44, 0.8)',
    //         'rgba(54, 162, 235, 0.8)',
    //         'rgba(136, 188, 28, 0.8)',
    //         'rgba(136, 188, 28, 0.9)'
    //       ],
    //       borderWidth: 0,
    //     }],
    //   },
    //   options: {}
    // });

  }

  atualizarDashboard() {
    this.dataAtualizacao = new Date();
    this.planoContasService.listarBalancoPatrimonial().subscribe(data => {
      this.balancoPatrimonial = data;
    });
  }
}
