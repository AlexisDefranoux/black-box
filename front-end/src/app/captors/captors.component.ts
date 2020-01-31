import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Device} from '../shared/models/device';

@Component({
  selector: 'app-captors',
  templateUrl: './captors.component.html',
  styleUrls: ['./captors.component.scss']
})
export class CaptorsComponent implements OnInit {

  device: Device;
  thresholdConfig = {
    0: {color: 'green'},
    10: {color: 'orange'},
    20: {color: 'red'}
  };
  fall: boolean;

  itemRef: any;

  constructor(db: AngularFireDatabase) {
    this.itemRef = db.object('/device-1');
    this.itemRef.valueChanges().subscribe( device => {this.device = new Device(device), this.fall = this.device.fall});
  }

  ngOnInit() {
  }

  updateProfile() {
    this.device.fall = this.fall;
    this.itemRef.update(this.device);
    console.log(this.device);
  }

}
