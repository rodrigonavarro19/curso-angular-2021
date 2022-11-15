import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Colors, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Colors[]= [
    {
      backgroundColor: [
        '#F6F59D',
        '#D4CC8A',
        '#EBDDA4',
        '#D4BE8A',
        '#F6D4A0',
      ],
      hoverBackgroundColor:[
        '#F6F002',
        '#D4BA00',
        '#EBBA0C',
        '#D49100',
        '#F69100',
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
