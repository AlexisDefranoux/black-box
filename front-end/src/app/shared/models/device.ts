import {Profile} from './profile';
import {convertSoundInDecibel} from '../utils/convert';

export class Device {
  co2: number;
  decibel: number;
  fall: boolean;
  humidity: number;
  temperature: number;
  profile: Profile;
  accelerometer: any;
  buzzer: boolean;
  led: string;
  vibrator: boolean;

  constructor(device: any = {}) {
    this.co2 = device.co2;
    this.decibel = convertSoundInDecibel(device.sound);
    this.fall = device.fall;
    this.humidity = device.temperature.humidity;
    this.temperature = device.temperature.temperature;
    this.profile = device.profile;
    this.accelerometer = device.accelerometer;
    this.buzzer = device.buzzer;
    this.led = device.led;
    this.vibrator = device.vibrator;
  }
}
