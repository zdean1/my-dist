import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  likeImage(boolParam: boolean) {
    if (boolParam == false) {
      return true;
    } else { return false; }
  }
}
