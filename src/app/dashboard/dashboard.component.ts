import { Component, OnInit } from '@angular/core';
import { Pays } from '../pays';
import { PaysService } from '../pays.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  paysList: Pays[] = [];

  constructor(private paysService: PaysService) { }

  ngOnInit() {
    this.getPaysList();
  }

  getPaysList(): void {
    this.paysService.getPaysList()
      .subscribe(paysList => this.paysList = paysList.slice(1, 5));
  }
}
