import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class BagService {
  constructor(private localStorage: LocalStorageService) {}

  addToBag(id: number | string) {
    let idNumber: number;
    if (typeof id === 'string') {
      idNumber = Number.parseInt(id);
    } else {
      idNumber = id;
    }
    this.localStorage.addToKey('bag', id);
  }

  removeFromBag(id: number) {
    this.localStorage.removeFromKey('bag', id);
  }

  getAllItems(): number[] {
    return this.localStorage.readKey('bag');
  }
}
