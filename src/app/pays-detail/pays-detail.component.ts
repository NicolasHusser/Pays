import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Pays }         from '../pays';
import { PaysService }  from '../pays.service';

@Component({
  selector: 'app-pays-detail',
  templateUrl: './pays-detail.component.html',
  styleUrls: [ './pays-detail.component.css' ]
})
export class PaysDetailComponent implements OnInit {
  pays: Pays;

  constructor(
    private route: ActivatedRoute,
    private paysService: PaysService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPays();
  }

  getPays(): void {
    const pays = this.route.snapshot.paramMap.get("name");
    console.log(pays);
    this.paysService.getPays(pays).subscribe(pays => this.pays = pays);
  }

  goBack(): void {
    this.location.back();
  }
}
