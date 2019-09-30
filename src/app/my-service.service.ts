import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  likeImage(boolParam: boolean) {
    console.log('boolParam = ' + boolParam);
    console.log('bool Param set to ' + !boolParam);
    if (boolParam == false) {
      return true;
    } else { return false; }
  }
}
