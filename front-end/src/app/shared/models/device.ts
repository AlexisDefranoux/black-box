export class Device {
  name: string;

  constructor(device: any = {}) {
    this.name = device.idMode;
  }
}
