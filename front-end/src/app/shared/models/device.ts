import {Profile} from './profile';
import {convertSoundInDecibel} from '../utils/convert';

export class Device {
  co2: number;
  decibel: number;
  fall: boolean;
  humidity: number;
  temperature: number;
  profile: Profile;
  accelerometerX: number;
  accelerometerY: number;
  accelerometerZ: number;
  buzzer: boolean;
  led: string;
  vibrator: boolean;
  co2Danger: boolean;
  temperatureDanger: boolean;
  soundDanger: boolean;

  constructor(device: any = {}) {
    this.co2 = device.co2;
    this.decibel = convertSoundInDecibel(device.sound);
    this.fall = device.fall;
    this.humidity = device.temperature.humidity;
    this.temperature = device.temperature.temperature;
    this.profile = device.profile;
    this.accelerometerX = device.accelerometer;
    this.accelerometerY = device.accelerometer + Device.getRandomInt(2000);
    this.accelerometerZ = device.accelerometer + Device.getRandomInt(2000);
    this.buzzer = device.buzzer;
    this.led = device.led;
    this.vibrator = device.vibrator;
    this.co2Danger = device.co2Danger;
    this.temperatureDanger = device.temperatureDanger;
    this.soundDanger = device.soundDanger;
  }

  private static getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
