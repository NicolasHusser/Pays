import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Continent }         from '../continent';
import { ContinentService }  from '../continent.service';

@Component({
  selector: 'app-continent-detail',
  templateUrl: './continent-detail.component.html',
  styleUrls: [ './continent-detail.component.css' ]
})
export class ContinentDetailComponent implements OnInit {
  continent: Continent;

  constructor(
    private route: ActivatedRoute,
    private continentService: ContinentService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getContinent();
  }

  getContinent(): void {
    const continent = this.route.snapshot.paramMap.get("region");
    console.log(continent);
    this.continentService.getContinent(continent).subscribe(continent => this.continent = continent);
  }

  goBack(): void {
    this.location.back();
  }
}
