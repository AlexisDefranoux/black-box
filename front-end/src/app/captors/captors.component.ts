import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-captors',
  templateUrl: './captors.component.html',
  styleUrls: ['./captors.component.scss']
})
export class CaptorsComponent implements OnInit {

  //devices: any;
  devices: Observable<any>;

  constructor(db: AngularFireDatabase) {
    //db.list('/').valueChanges().subscribe( devices => this.devices = devices);
    this.devices = db.list('/').valueChanges();
  }

  ngOnInit() {
  }

}
