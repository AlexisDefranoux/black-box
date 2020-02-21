export class Profile {
  name: string;
  minCo2: number;
  maxCo2: number;
  minTemperature: number;
  maxTemperature: number;
  minSound: number;
  maxSound: number;
  email: string;
  checkFall: boolean

  constructor(parameters: any = {}) {
    this.name = parameters.name;
    this.minCo2 = parameters.minCo2;
    this.maxCo2 = parameters.maxCo2;
    this.minTemperature = parameters.minTemperature;
    this.maxTemperature = parameters.maxTemperature;
    this.minSound = parameters.minSound;
    this.maxSound = parameters.maxSound;
    this.email = parameters.email;
    this.checkFall = parameters.checkFall;
  }
}
