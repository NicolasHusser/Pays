import { Component, OnInit } from '@angular/core';

import { Continent } from '../continent';
import { ContinentService } from '../continent.service';
import { UniquePipe } from '../filter.pipe';


@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.css']
})
export class ContinentsComponent implements OnInit {

  continents: Continent[] = [];

  constructor(private continentService: ContinentService) { }

  ngOnInit() {
  }

  getContinents(): void {
    this.continentService.getContinents()
        .subscribe(continents => this.continents = continents);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    continents => this.continents = continents;
      console.log(this.continents);
        this.continents.push({
          region: name
        });
      }

}
