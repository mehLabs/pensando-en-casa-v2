import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  private mobile: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    window.innerWidth <= 768
  );
  private windowWidth: BehaviorSubject<number> = new BehaviorSubject<number>(
    window.innerWidth
  );

  private showHeader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );

  isMobile(): Observable<boolean> {
    console.log(this.mobile.value);
    return this.mobile.asObservable();
  }

  isShowHeader(): Observable<boolean> {
    return this.showHeader.asObservable();
  }

  hideHeader() {
    this.showHeader.next(false);
  }
  doShowHeader() {
    this.showHeader.next(true);
  }

  scrollUp() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  constructor() {
    addEventListener('resize', (event) => {
      this.windowWidth.next(window.innerWidth);
      if (window.innerWidth > 768 && this.mobile.value) {
        this.mobile.next(false);
      } else {
        if (window.innerWidth <= 768 && !this.mobile.value) {
          this.mobile.next(true);
        }
      }
    });
  }

  innerWidth(): Observable<number> {
    return this.windowWidth.asObservable();
  }
}
