import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Colors, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {
  
  public doughnutChartLabels: Label[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];
  public doughnutChartData: MultiDataSet = [
    // [350, 450, 100]
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


  constructor(private graficasService :GraficasService) { }

  ngOnInit(): void {

    // this.graficasService.getUsuariosredesSociales()
    //   .subscribe(data =>{
    //     console.log(data);

    //     //Extrae los nombres del Json "Object.keys"
    //     const labels = Object.keys( data );
    //     console.log(labels)
    //     this.doughnutChartLabels = labels;

    //     //Extrae los nombres del Json "Object.keys"
    //     const values = Object.values( data );
    //     console.log( values )
    //     this.doughnutChartData.push( values);
    //   })

    this.graficasService.getUsuariosredesSocialesDonaData()
      .subscribe( ({labels, values}) =>{
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push( values );
      })

  }

}
