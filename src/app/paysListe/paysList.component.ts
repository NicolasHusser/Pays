import { Component, OnInit } from '@angular/core';
import { Pays } from '../pays';
import { PAYS } from '../mock-paysList';

@Component({
  selector: 'app-paysList',
  templateUrl: './paysList.component.html',
  styleUrls: ['./paysList.component.css']
})

export class PaysComponent implements OnInit {

  paysList = PAYS;
  selectedPays: Pays;

  constructor() { }

  ngOnInit() {
  }

  onSelect(pays: Pays): void {
    this.selectedPays = pays;
  }
}
