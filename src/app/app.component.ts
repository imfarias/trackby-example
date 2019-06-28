import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  itemList = [];
  itemListTrack = [];

  constructor() {
    this.itemList = [
      {
        id: 1,
        name: 'Teste 1'
      },
      {
        id: 2,
        name: 'Teste 2'
      },
      {
        id: 3,
        name: 'Teste 3'
      },
      {
        id: 4,
        name: 'Teste 4'
      }
    ];
    this.itemListTrack = [
      {
        id: 1,
        name: 'Teste 1'
      },
      {
        id: 2,
        name: 'Teste 2'
      },
      {
        id: 3,
        name: 'Teste 3'
      },
      {
        id: 4,
        name: 'Teste 4'
      }
    ];
  }

  removeItem(index) {
    this.itemList.splice(index, 1);
  }

  removeItemTrack(index) {
    this.itemListTrack.splice(index, 1);
  }

  resetItemList() {
    this.itemList = [
      {
        id: 1,
        name: 'Teste 1'
      },
      {
        id: 2,
        name: 'Teste 2'
      },
      {
        id: 3,
        name: 'Teste 3'
      },
      {
        id: 4,
        name: 'Teste 4'
      }
    ];
  }

  resetItemListTrack() {
    this.itemListTrack = [
      {
        id: 1,
        name: 'Teste 1'
      },
      {
        id: 2,
        name: 'Teste 2'
      },
      {
        id: 3,
        name: 'Teste 3'
      },
      {
        id: 4,
        name: 'Teste 4'
      }
    ];
  }

  trackFunction(index, item) {
    return item.id;
  }

}
