import {Profile} from './profile';

export class Profiles {
  static readonly list = [
    new Profile({name: 'Default', email: 'alexis.defranoux@etu.univ-cotedazur.fr', minCo2: 0, maxCo2: 25, minTemperature: 20, maxTemperature: 30, minSound: 0, maxSound: 400}),
    new Profile({name: 'Mountain', email: 'alexis.defranoux@etu.univ-cotedazur.fr', minCo2: 0, maxCo2: 6, minTemperature: 0, maxTemperature: 35, minSound: 0, maxSound: 700}),
    new Profile({name: 'Old person', email: 'alexis.defranoux@etu.univ-cotedazur.fr', minCo2: 0, maxCo2: 5, minTemperature: 20, maxTemperature: 30, minSound: 0, maxSound: 600}),
    new Profile({name: 'Fireman', email: 'alexis.defranoux@etu.univ-cotedazur.fr', minCo2: 0, maxCo2: 8, minTemperature: 10, maxTemperature: 40, minSound: 0, maxSound: 1000}),
  ];
}
