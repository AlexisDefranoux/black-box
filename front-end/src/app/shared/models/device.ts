import {Profile} from './profile';
import {convertSoundInDecibel} from '../utils/convert';

export class Device {
  co2: number;
  decibel: number;
  fall: boolean;
  humidity: number;
  temperature: number;
  profile: Profile;

  constructor(device: any = {}) {
    this.co2 = device.co2;
    this.decibel = convertSoundInDecibel(device.sound);
    this.fall = device.fall;
    this.humidity = device.temperature[1];
    this.temperature = device.temperature[2];
    this.profile = device.profile;
  }
}
