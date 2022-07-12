import { Observable, of } from 'rxjs';
import { Ebike } from './../ebike';
import { ebikes } from './../database/ebikes';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  ebikes = new Observable<Ebike[]>;

  constructor() { }

  getEbikes(): Observable<Ebike[]>{
    return of(ebikes);
  }

}
