import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeToInactiveCounter = 0;
  InactiveToActiveCounter = 0;
  actions: number = 0;

  constructor() { }

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log('Active to Inactive: ' + this.activeToInactiveCounter);
  }

  incrementInactiveToActive() {
    this.InactiveToActiveCounter++;
    console.log('Inactive to Active: ' + this.InactiveToActiveCounter);
  }

  // onNewAction() {
  //   console.log(++this.actions);
  // }
}
