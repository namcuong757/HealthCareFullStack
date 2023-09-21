import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private chooseDay: number = 0;
  constructor() { }
  setChooseDay(day: number) {
    this.chooseDay = day;
  }

  getChooseDay() {
    return this.chooseDay;
  }
}
