export class Profile {
  name: string;
  minCo2: number;
  maxCo2: number;
  checkFall: boolean;
  minTemperature: number;
  maxTemperature: number;
  minSound: number;
  maxSound: number;

  constructor(parameters: any = {}) {
    this.name = parameters.name;
    this.minCo2 = parameters.minCo2;
    this.maxCo2 = parameters.maxCo2;
    this.checkFall = parameters.checkFall;
    this.minTemperature = parameters.minTemperature;
    this.maxTemperature = parameters.maxTemperature;
    this.minSound = parameters.minSound;
    this.maxSound = parameters.maxSound;
  }
}
