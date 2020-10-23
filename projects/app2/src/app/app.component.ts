import { Component } from '@angular/core';
import {LibService} from 'lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app2';

  constructor(private libService: LibService) {
  }
}
