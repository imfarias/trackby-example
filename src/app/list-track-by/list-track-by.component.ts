import {Component} from '@angular/core';

@Component({
  selector: 'app-root-list-track-by',
  templateUrl: './list-track-by.component.html',
  styleUrls: ['./list-track-by.component.scss']
})
export class AppListTrackByComponent {

  itemListTrack = [];

  constructor() {
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

  removeItemTrack(index) {
    this.itemListTrack.splice(index, 1);
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
