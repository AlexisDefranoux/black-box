export class Profile {
  name: string;
  minCo2: number;
  maxCo2: number;

  constructor(parameters: any = {}) {
    this.name = parameters.name;
    this.minCo2 = parameters.minCo2;
    this.maxCo2 = parameters.maxCo2;
  }
}
