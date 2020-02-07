import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Device} from '../shared/models/device';

@Component({
  selector: 'app-captors',
  templateUrl: './captors.component.html',
  styleUrls: ['./captors.component.scss']
})
export class CaptorsComponent {

  device: Device;
  thresholdConfig = {
    0: {color: 'green'},
    20: {color: 'orange'},
    30: {color: 'red'}
  };
  fall: boolean;
  itemRef: any;

  constructor(db: AngularFireDatabase) {
    this.itemRef = db.object('/device-1');
    this.itemRef.valueChanges().subscribe( device => {this.device = new Device(device); this.fall = this.device.fall});
  }
}
