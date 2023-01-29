import {Component} from '@angular/core';
import {CarService} from "../car-service/car.service";

@Component({
  selector: 'app-page-car-list',
  templateUrl: './page-car-list.component.html',
  styleUrls: ['./page-car-list.component.css']
})
export class PageCarListComponent {

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
