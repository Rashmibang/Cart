import {Component, OnInit} from '@angular/core';
import {DataserviceService, Item} from '../dataservice.service';
import {StoreService} from '../store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  ItemsAvailable: Item[];
  value;
  newArray = [];

  constructor(private service: DataserviceService,
              private store: StoreService) {
  }

  getdiscountedprice(item: Item): number {
    let discountedPrice: number;
    let finalPrice: number;
    discountedPrice = item.price * item.discount / 100;
    finalPrice = item.price - discountedPrice;
    return finalPrice;
  }

  cartItems(item: Item): void {
    this.store.addItemToCard(item);
  }

  ngOnInit(): void {
    console.log(this.service.TechItems);
    this.ItemsAvailable = this.service.TechItems;
  }


}
