import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibService {
  public text = 'lib-service text';

  constructor() { }
}
