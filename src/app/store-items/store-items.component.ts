import { Ebike } from './../ebike';
import { Component, OnInit } from '@angular/core';
import { BikeService } from '../services/bike.service';

@Component({
  selector: 'app-store-items',
  templateUrl: './store-items.component.html',
  styleUrls: ['./store-items.component.css']
})
export class StoreItemsComponent implements OnInit {

  ebikesList: Ebike[] = [];

  constructor(private ebikeService: BikeService) { }

  ngOnInit(): void {
    this.ebikesList = this.ebikeService.getEbikes();
  }

}
