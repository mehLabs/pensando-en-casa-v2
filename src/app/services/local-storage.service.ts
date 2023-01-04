import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  readKey(key: string): any {
    return JSON.parse(localStorage.getItem(key) || '[]');
  }

  addToKey(key: string, value: any) {
    let newValue: null | string[] = [];
    let itemFromStorage = localStorage.getItem(key);

    if (itemFromStorage !== null) {
      newValue = JSON.parse(localStorage.getItem(key) || '[]');
    }
    console.log(newValue);
    if (newValue && !newValue.includes(value)) {
      newValue.push(value);
    }
    localStorage.setItem(key, JSON.stringify(newValue));
  }

  createKey(key: string) {
    localStorage.setItem(key, '[]');
  }

  removeFromKey(key: string, rElement: number) {
    //rElement for removeElement
    let storageProducts = JSON.parse(localStorage.getItem(key) || '[]');
    let products = storageProducts.filter((element: string) => {
      let elementNum = Number.parseInt(element);
      return elementNum !== rElement;
    });
    localStorage.setItem(key, JSON.stringify(products));
  }
}
