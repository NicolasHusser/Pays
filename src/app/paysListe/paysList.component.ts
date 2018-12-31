import { Component, OnInit } from '@angular/core';

import { Pays } from '../pays';
import { PaysService } from '../pays.service';

@Component({
  selector: 'app-paysList',
  templateUrl: './paysList.component.html',
  styleUrls: ['./paysList.component.css']
})
export class PaysComponent implements OnInit {

  paysList: Pays[] = [];

  constructor(private paysService: PaysService) { }

  ngOnInit() {

  }

  getPaysList(): void {
    this.paysService.getPaysList()
        .subscribe(paysList => this.paysList = paysList);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    paysList => this.paysList = paysList;
      console.log(this.paysList);
        this.paysList.push({
          name: name
        });
      }

}
