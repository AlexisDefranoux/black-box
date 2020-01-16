import {Profile} from './profile';

export class Device {
  co2: number;
  decibel: number;
  fall: boolean;
  humidity: number;
  temperature: number;
  profile: Profile;

  constructor(device: any = {}) {
    this.co2 = device.co2;
    this.decibel = device.decibel;
    this.fall = device.fall;
    this.humidity = device.humidity;
    this.temperature = device.temperature;
    this.profile = device.profile;
  }
}
