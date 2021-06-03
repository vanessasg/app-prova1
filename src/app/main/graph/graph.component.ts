import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { UserService } from '../../user.service';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent {
  users: any = [];
  ages: any = [];

  constructor(private userService: UserService) { }

  getAge() {
    this.userService.getUsers().subscribe((res) => {
      //console.log(res.age);
      let one = 0, two=0,three=0,four=0,five=0,six=0;
      for (let r in res) {
        //console.log(res[r].age);
        if (res[r].age < 18) {
          one++;
        }
        if (res[r].age >= 18 && res[r].age < 25) {
          two++;
        }
        if (res[r].age >= 25 && res[r].age < 35) {
          three++;
        }
        if (res[r].age >= 35 && res[r].age < 50) {
          four++;
        }
        if (res[r].age >= 50 && res[r].age < 75) {
          five++;
        }
        if (res[r].age >= 75) {
          six++;
        }
        this.barChartData[0].data = [one,two,three,four,five,six]
      }
    });
  }

  ngOnInit(): void {
    this.getAge();
  }

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{
      ticks: {
        stepSize: 5,
        min: 0,
        max: 40
      }
    }] },
  };
  barChartLabels: Label[] = ['<18', '18-25', '25-35', '35-50', '50-75', '>75'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [], label: 'Users' },
  ];

}
