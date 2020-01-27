import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Profile} from '../shared/models/profile';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  profile: Profile;

  constructor(db: AngularFireDatabase) {
    db.list('/device-1').valueChanges().subscribe(profile => this.profile = new Profile(profile[2]));
  }

  ngOnInit() {
  }

}
