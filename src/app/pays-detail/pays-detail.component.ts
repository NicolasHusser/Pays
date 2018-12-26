import { Component, OnInit, Input } from '@angular/core';
import { Pays } from '../pays';

@Component({
  selector: 'app-pays-detail',
  templateUrl: './pays-detail.component.html',
  styleUrls: ['./pays-detail.component.css']
})
export class PaysDetailComponent implements OnInit {
  @Input() pays: Pays;

  constructor() { }

  ngOnInit() {
  }

}
