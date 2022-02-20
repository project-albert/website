import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class AppService {
  mainLoader$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  navTitle$: BehaviorSubject<string> = new BehaviorSubject<string>(environment.title);
  loadComponents: Array<string> = [];

  constructor() { }

  addLoadComponent(component: string) {
    this.loadComponents.push(component);
    if (this.loadComponents.length > 0) {
      this.mainLoader$.next(true)
    }
  }

  removeLoadComponent(component: string) {
    const index = this.loadComponents.indexOf(component);
    this.loadComponents.splice(index, 1)
    if (this.loadComponents.length == 0) {
      this.mainLoader$.next(false)
    }
  }

  setTitle(value: string) {
    this.navTitle$.next(value);
  }
}
