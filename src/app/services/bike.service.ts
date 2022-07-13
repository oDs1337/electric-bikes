import { Observable, of } from 'rxjs';
import { Ebike } from './../ebike';
import { ebikes } from './../database/ebikes';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { saveBikes } from '../state/ebike.actions';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private store: Store) { }

  getEbikes(): void{
    of(ebikes).subscribe(items => this.store.dispatch(saveBikes({ebikes: items})));
  }

}
