import { Component, OnInit } from "@angular/core";
import * as L from "leaflet";

@Component({
  selector: "app-world-map",
  templateUrl: "./world-map.component.html",
  styleUrls: ["./world-map.component.css"]
})
export class WorldMapComponent implements OnInit {
  leafletZoom = 3;
  options = {
    layers: [
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "..."
      })
    ],
    zoom: 3,
    center: L.latLng(46.879966, -121.726909)
  };
  leafletCenter: L.LatLng;
  markerLayers: L.Marker<any>[];

  constructor() {}

  ngOnInit() {
    const marker1 = L.marker([46.879966, -121.726909], {
      icon: L.icon({
        iconUrl: "././../../../../assets/map-pin.png",
        iconSize: [48, 48],
        iconAnchor: [15, 48]
      })
    });

    this.markerLayers = [marker1];
  }

  onMapReady(map: L.Map) {
    map.scrollWheelZoom.disable();
  }
}
