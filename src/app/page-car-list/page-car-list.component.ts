import {Component} from '@angular/core';
import {CarService} from "../car-service/car.service";
import {CarManufacturer} from "../model/car";

@Component({
  selector: 'app-page-car-list',
  templateUrl: './page-car-list.component.html',
  styleUrls: ['./page-car-list.component.css']
})
export class PageCarListComponent {

  getAllCarManufacturers(): CarManufacturer[] {
    return Object.keys(CarManufacturer)

  }

  // kolumny które chcemy wyświetlić
  displayedColumns: string[] = [
    'car-col-id',
    'car-col-name',
    'car-col-manufacturer',
    'car-col-model',
    'car-col-engine-capacity',
  ]

  constructor(protected carService: CarService) {
  }
}
