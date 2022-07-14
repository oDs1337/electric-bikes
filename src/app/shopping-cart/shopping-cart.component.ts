import { BikeService } from './../services/bike.service';
import { Ebike } from './../ebike';
import { ebikes } from './../database/ebikes';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  ebikesList?: Ebike[];

  constructor(private ebikeService: BikeService, private store: Store<{bikes: Ebike[]}>) { }

  ngOnInit(): void {
    this.ebikeService.getEbikes();
    this.fetchBikes();
  }

  fetchBikes(): void{
    this.store.select((state) => state.bikes).subscribe((items) => {
      this.ebikesList = items;
    });
  }

}
