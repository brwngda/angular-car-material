export enum CarManufacturer {
  BMW,
  MERCEDES,
  LEXUS,
  VW,
  MAZDA,
  OPEL,
  FORD
}

export type Car = {
  id: number,
  name: string,
  manufacturer: CarManufacturer,
  model: string,
  engineCapacity: number, // pojemność silnika, np. 1.6

}
