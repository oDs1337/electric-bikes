import { Ebike } from './../ebike';
import { Component, OnInit } from '@angular/core';
import { ebikes } from '../database/ebikes';

@Component({
  selector: 'app-store-items',
  templateUrl: './store-items.component.html',
  styleUrls: ['./store-items.component.css']
})
export class StoreItemsComponent implements OnInit {

  ebikesList: Ebike[] = ebikes;

  constructor() { }

  ngOnInit(): void {
  }

}
