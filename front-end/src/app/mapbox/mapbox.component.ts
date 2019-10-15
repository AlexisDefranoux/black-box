import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss']
})
export class MapboxComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 43.615770;
  lng = 7.071907;

  constructor() { }

  ngOnInit() {
    // @ts-ignore
    mapboxgl.accessToken = environment.mapbox.accessToken;

    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat]
    });

    this.map.addControl(new mapboxgl.NavigationControl());

    new mapboxgl.Marker()
      .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML('<h3>Black box #43</h3><p>Status: allumé</p><p>Configuration: randonneur</p>'))
      .setLngLat([this.lng, this.lat])
      .addTo(this.map);
  }
}
