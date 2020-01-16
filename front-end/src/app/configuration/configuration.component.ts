import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  items: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.items = db.list('device-1/profile').valueChanges();
  }

  ngOnInit() {
  }

}
