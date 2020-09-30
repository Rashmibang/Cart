import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Item} from './dataservice.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private itemsInCart: Item[] = [];
  cartSubject = new BehaviorSubject([]);

  constructor() {
  }

  addItemToCard(item: Item): void {
    this.itemsInCart.push(item);
    this.cartSubject.next(this.itemsInCart);
  }

}
