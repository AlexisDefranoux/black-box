import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Profile} from '../shared/models/profile';
import {Profiles} from '../shared/models/profiles';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  profile: Profile;
  profiles = Profiles.list;
  selectedProfile = Profiles.list[0];
  itemRef: any;
  customProfile = new Profile();

  constructor(db: AngularFireDatabase, private snackBar: MatSnackBar) {
    this.itemRef = db.object('/device-1/profile');
    this.itemRef.valueChanges().subscribe(profile => this.profile = new Profile(profile));
  }

  ngOnInit() {
  }

  updateProfile() {
    this.itemRef.update(this.selectedProfile);
    this.openSnackBar('Black box profile updated !');
  }

  addCustomProfile() {
    Profiles.list.push(this.customProfile);
    this.itemRef.update(this.customProfile);
    this.openSnackBar('Black box profile created and updated');
  }

  private openSnackBar(msg: string) {
    this.snackBar.open(msg, 'X', {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'end'
    });
  }

}
