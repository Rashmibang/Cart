import {Component, OnInit} from '@angular/core';
import {StoreService} from '../store.service';
import {DataserviceService, Item} from '../dataservice.service';

interface ItemCounter {
  item: Item;
  count: number;
}

@Component({
  selector: 'app-shoppingbag',
  templateUrl: './shoppingbag.component.html',
  styleUrls: ['./shoppingbag.component.css']
})
export class ShoppingbagComponent implements OnInit {

  countedItems: ItemCounter[] = [];
  itemCounter: { [id: string]: ItemCounter } = {};

  constructor(private store: StoreService, private service: DataserviceService) {
  }

  ngOnInit(): void {
    this.store.cartSubject.subscribe((items: Item[]) => {
      items.forEach(it => {
        if (this.itemCounter[it.id]) {
          this.itemCounter[it.id].count += 1;
        } else {
          this.itemCounter[it.id] = {item: it, count: 1};
        }
      });

      this.countedItems = Object.values(this.itemCounter);
    });

  }

}
