import {Injectable} from '@angular/core';
import {Car, CarManufacturer} from "../model/car";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  carList: Car[] = []

  constructor() {
    this.carList.push({
      id: 1,
      name: 'Wóz',
      manufacturer: CarManufacturer.LEXUS,
      model: 'Jeżdzący',
      engineCapacity: 8.1
    })
  }
}
