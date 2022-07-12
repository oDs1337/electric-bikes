import { Ebike } from './../ebike';
import { ebikes } from './../database/ebikes';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  #ebikes: Ebike[] = ebikes;

  constructor() { }

  getEbikes(): Ebike[]{
    return this.#ebikes;
  }

}
