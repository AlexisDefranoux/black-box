import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  navLinks: { label: string, path: string }[];

  constructor() {
    this.navLinks = [
      {
        label: 'Devices',
        path: `devices`
      },
      {
        label: 'Configurations',
        path: `configurations`
      }
    ];
  }

  ngOnInit() {
  }

}
