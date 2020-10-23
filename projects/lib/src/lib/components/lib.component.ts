import {Component, OnInit} from '@angular/core';
import {LibService} from '../services/lib.service';

@Component({
  selector: 'lib-lib',
  templateUrl: './lib.component.html',
  styleUrls: [
    './lib.component.scss',
  ],
})
export class LibComponent implements OnInit {

  constructor(public libService: LibService) {
  }

  ngOnInit(): void {
  }

}
