import {Component, Input, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {Label} from "ng2-charts";

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input()horizontal:boolean = false;

  @Input() barChartData: ChartDataSets[] = [
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#ED5F76', hoverBackgroundColor: 'red'},
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#F763C4',hoverBackgroundColor: 'red'},
    // { data: [8, 24, 30, 59, 6, 87, 100], label: 'Series C', backgroundColor: '#D665E0',hoverBackgroundColor: 'red'},
  ];
  @Input()  barChartLabels: Label[] = [
    // '2020', '2021', '2022', '2023', '2024', '2025', '2026'
  ];

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;




  constructor() {
  }

  ngOnInit(): void {
    if (this.horizontal){
      this.barChartType = 'horizontalBar'
    }
  }

}
