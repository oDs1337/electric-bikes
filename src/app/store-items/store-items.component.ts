import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import { Ebike } from './../ebike';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BikeService } from '../services/bike.service';
import { increment, decrement, remove } from '../state/ebike.actions';


@Component({
  selector: 'app-store-items',
  templateUrl: './store-items.component.html',
  styleUrls: ['./store-items.component.css']
})
export class StoreItemsComponent implements OnInit {

  ebikesList?: Ebike[];
  //count$: Observable<number>;

  constructor(private ebikeService: BikeService, private store: Store<{bikes: Ebike[]}>) {
   }

  ngOnInit(): void {
    this.ebikeService.getEbikes();
    this.fetchBikes();
  }

  fetchBikes(): void{
    this.store.select((state) => state.bikes).subscribe((items) => {
      this.ebikesList = items;
    });
  }

  updateCounter(i: number): void{
    this.store.select('bikes').forEach((items) => {
      this.ebikesList![i].count = items[i].count;
    })
  }

  increment(i: number){
    this.store.dispatch(increment({index: i}));
  }

  decrement(i: number){
    this.store.dispatch(decrement({index: i}));
  }

  remove(i: number){
    this.store.dispatch(remove({index: i}));
  }

}
