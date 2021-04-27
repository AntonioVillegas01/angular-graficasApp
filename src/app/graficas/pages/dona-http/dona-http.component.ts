import {Component, OnInit} from '@angular/core';
import {GraficasService} from "../../services/graficas.service";
import {Color, Label, MultiDataSet} from "ng2-charts";
import {ChartType} from "chart.js";

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: []
})
export class DonaHttpComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: Label[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'other'
  ];
  public doughnutChartData: MultiDataSet = [
    //  [350, 450, 100, 150]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: [
        '#0075ED',
        '#00BAF7',
        '#00E0DB',
        '#00ED63',
        '#034',
      ]
    }
  ]

  constructor(public graficasService: GraficasService) {
  }

  ngOnInit(): void {

    this.graficasService.getUsuariosRedesSocialesDonaData()
      .subscribe(({labels, values}) => {
        this.doughnutChartLabels = labels
        this.doughnutChartData.push(values)
      })


    // FORMA SIMPLE de traer la data
    // this.graficasService.getUsuariosRedesSociales()
    //   .subscribe( data => {
    //   const labels = Object.keys(data);
    //   const values: number[] = Object.values(data);
    //   this.doughnutChartLabels = labels;
    //   console.log(values)
    //   this.doughnutChartData.push(values);
    // })
  }

}
