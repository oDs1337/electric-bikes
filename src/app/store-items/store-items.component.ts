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
    console.log(this.ebikesList);
  }

  fetchBikes(): void{
    this.store.select((state) => state.bikes).subscribe(items => this.ebikesList = items);
  }

  increment(){
     this.store.dispatch(increment());
  }

  decrement(){
    this.store.dispatch(decrement());
  }

  remove(){
    this.store.dispatch(remove());
  }

}
