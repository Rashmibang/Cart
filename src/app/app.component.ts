import {Component, OnInit} from '@angular/core';
import {StoreService} from './store.service';
import {Item} from './dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Cart';
  count = 0;

  constructor(private store: StoreService) {
  }

  ngOnInit(): void {
    this.store.cartSubject.subscribe((items: Item[]) => {
      this.count = items.length;
    });
  }


}
