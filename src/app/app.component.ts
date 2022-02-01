import { Component } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ac-pipes';
  convertText: string = "I Am Being Managed By Pipes";
  itemPrice: number = 5.50;
  currentDate = Date.now();
  numDateFormat = 1478496544151;
  getYear = 'Tue Dec 12 2018 11:20:18 GMT+0530';
  getTime = 'Wed Jan 20 2019 12:20:18 GMT+0530';
  customText: string = "Test string to count the number of words";

  // Promise or Observable<{return type}
  asyncPromise: Promise<string>;
  asyncObservable: Observable<string>;
  timer: Observable<Number>;
  planets: Observable<any>;
  colors: Promise<any>;
  buildStatus: Promise<any>;
  users: Observable<string[]>;
  
  // defineed two methods for creating a promise from a string value and an observable from a string value

  // For the promise, we simply resolve with the string passed as a parameter to the component's 
  // method after three seconds have passed using the setTimeout method
  makePromise(value: string): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(value), 3000);
    })
  }

  // For the observable, we create an observable, that emits the string value passed as a parameter to the component's
  // method after three seconds have passed, using the of and delay methods.
  makeObservable(value: string): Observable<string> {
    return of(value).pipe(delay(3000));
  }

  ngOnInit() {
    this.asyncPromise = this.makePromise('Async Promise');
    this.asyncObservable = this.makeObservable('Async Observable');
    this.timer = timer(1000, 1000);
    this.colors = Promise.resolve(["Blue", "Green", "Red"]);
    this.users = of(['Alice', 'Jane', 'Dan', 'Mary'])

    // resolve after 5 seconds with 'Completed'
    this.buildStatus = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Completed');
      }, 5000);
    });

  }
  
}
