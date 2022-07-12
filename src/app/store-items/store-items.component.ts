import { Subscription, Observable } from 'rxjs';
import { Ebike } from './../ebike';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BikeService } from '../services/bike.service';

@Component({
  selector: 'app-store-items',
  templateUrl: './store-items.component.html',
  styleUrls: ['./store-items.component.css']
})
export class StoreItemsComponent implements OnInit {

  ebikesList?: Ebike[];

  constructor(private ebikeService: BikeService) { }

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void{
    this.ebikeService.getEbikes()
      .subscribe(items => this.ebikesList = items);
  }

}
