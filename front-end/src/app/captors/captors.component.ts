import {Component, Input, OnInit} from '@angular/core';
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
    4: {color: 'orange'},
    7: {color: 'red'}
  };

  constructor(db: AngularFireDatabase) {
    db.list('/').valueChanges().subscribe( device => this.device = new Device(device[0]));
  }

  ngOnInit() {
  }

}
