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

  isMobile(): Observable<boolean> {
    console.log(this.mobile.value);
    return this.mobile.asObservable();
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
