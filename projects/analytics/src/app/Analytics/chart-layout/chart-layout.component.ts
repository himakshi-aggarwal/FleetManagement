import { Component, OnInit } from '@angular/core';
import { faClock, faCoins, faKeyboard, faMoneyBillAlt, faRupeeSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chart-layout',
  templateUrl: './chart-layout.component.html',
  styleUrls: ['./chart-layout.component.scss']
})
export class ChartLayoutComponent implements OnInit {

  faKeyboard = faKeyboard;
  faInr = faRupeeSign;
  faMoney = faMoneyBillAlt;
  faClock = faClock;
  faCoins = faCoins;
  public graph = {
    data: [
      {
        x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        y: [30000, 110000, 60000, 80000, 70000, 90000, 85000, 100000, 115000, 40000, 65000, 78000],
        type: 'scatter', mode: 'lines+points', name: 'Income', marker: { color: 'grey' }
      },
      {
        x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        y: [60000, 120000, 65000, 85000, 66000, 79000, 83000, 100000, 30000, 50000, 55000, 67000],
        type: 'scatter', mode: 'lines+points', name: 'Outcome', marker: { color: 'green' }
      },
    ],
    layout: { width: 760, height: 340 }
  };

  public donutGraph = {
    data: [
      {
        values: [30000, 25000, 15000, 32000],
        labels: ['Maintenance', 'Labour Cost', 'Fuel', 'Other'],
        marker: {
          colors: ['rgb(9, 144, 81)', 'rgb(24, 212, 124)', 'rgb(163, 218, 54)', 'rgb(218, 218, 54)']
        },
        domain: { column: 0 },
        insidetextorientation: "radial",
        textposition: "right",
        textinfo: "label+percent",
        // name: 'GHG Emissions',
        hoverinfo: 'label+percent+name',
        hole: .85,
        type: 'pie'
      }
    ],
    layout: {
      annotations: [
        {
          font: {
            size: 20
          },
          showarrow: false,
          text: '',
          x: 0.17,
          y: 0.5
        },
        {
          font: {
            size: 20
          },
          showarrow: false,
          text: '',
          x: 0.82,
          y: 0.5
        }
      ],
      height: 300,
      width: 450,
      showlegend: true,
      grid: { rows: 1, columns: 2 }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
