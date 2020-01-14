import { Component, OnInit } from '@angular/core';
import {DevicesService} from '../shared/services/devices.service';
import {Device} from '../shared/models/device';

@Component({
  selector: 'app-captors',
  templateUrl: './captors.component.html',
  styleUrls: ['./captors.component.scss']
})
export class CaptorsComponent implements OnInit {

  device: Device;

  constructor(private devicesService: DevicesService) { }

  ngOnInit() {
  }

  send() {
    console.log('je suis la');
    this.device = new Device('ouiiiiiiiii');
    this.devicesService.giveCaptor(this.device);
  }

}
