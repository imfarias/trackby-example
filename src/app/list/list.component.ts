import {Component} from '@angular/core';

@Component({
  selector: 'app-root-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class AppListComponent {

  itemList = [];

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
  }

  removeItem(index) {
    this.itemList.splice(index, 1);
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

}
