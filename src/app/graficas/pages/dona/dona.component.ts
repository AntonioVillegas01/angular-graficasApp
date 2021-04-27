import { Component, OnInit } from '@angular/core';
import {Color, Label, MultiDataSet} from "ng2-charts";
import {ChartType} from "chart.js";

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'other'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 150]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[]= [
    {
      backgroundColor:[
        '#0075ED',
        '#00BAF7',
        '#00E0DB',
        '#00ED63',
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
