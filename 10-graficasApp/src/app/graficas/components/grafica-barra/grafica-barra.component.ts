import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.css']
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;


  public barChartOptions: ChartOptions = {
    responsive: true,
    
  };

  @Input() barChartLabels: Label[] = [
    // '2006', '2007', '2008', '2009', '2010', '2011', '2012'
  ];
  
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;


  @Input() barChartData: ChartDataSets[] = [
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#5BF2F6', hoverBackgroundColor: '#02F4F6' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#50D4B3', hoverBackgroundColor: '#04D49D' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series C', backgroundColor: '#65EBA6', hoverBackgroundColor: '#11EB77' }
  ];




  constructor() { }

  ngOnInit(): void {

    if (this.horizontal){
      this.barChartType = 'horizontalBar'
    }

  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
       
    ];

    this.barChartData[1].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
       
    ];

    this.barChartData[2].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
       
    ];
  }

}
