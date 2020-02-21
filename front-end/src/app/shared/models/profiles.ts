import {Profile} from './profile';

export class Profiles {
  static readonly list = [
    new Profile({name: 'Default', email: 'alexis.defranoux@etu.univ-cotedazur.fr', minCo2: 0, maxCo2: 50, minTemperature: 0, maxTemperature: 40, minSound: 0, maxSound: 1000, checkFall: false}),
    new Profile({name: 'Pompier - Température dangereuse', email: 'centre.des.pompiers@pompier.fr', minCo2: 0, maxCo2: 50, minTemperature: 20, maxTemperature: 30, minSound: 0, maxSound: 1000, checkFall: false}),
    new Profile({name: 'Pompier - Environnement bruyant', email: 'centre.des.pompiers@pompier.fr', minCo2: 0, maxCo2: 50, minTemperature: 0, maxTemperature: 50, minSound: 200, maxSound: 500, checkFall: false}),
    new Profile({name: 'Pompier - Objets à risque', email: 'centre.des.pompiers@pompier.fr', minCo2: 0, maxCo2: 50, minTemperature: 0, maxTemperature: 50, minSound: 0, maxSound: 1000, checkFall: true}),
    new Profile({name: 'Pompier - Gaz dangereux/toxique', email: 'centre.des.pompiers@pompier.fr', minCo2: 0, maxCo2: 20, minTemperature: 0, maxTemperature: 50, minSound: 0, maxSound: 1000, checkFall: false}),
  ];
}
