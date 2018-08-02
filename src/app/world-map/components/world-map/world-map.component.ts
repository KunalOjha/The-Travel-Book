import { Component, OnInit } from "@angular/core";
import { tileLayer, latLng } from "leaflet";

@Component({
  selector: "app-world-map",
  templateUrl: "./world-map.component.html",
  styleUrls: ["./world-map.component.css"]
})
export class WorldMapComponent implements OnInit {
  leafletZoom = 3;
  options = {
    layers: [
      tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "..."
      })
    ],
    zoom: 3,
    center: latLng(46.879966, -121.726909)
  };

  constructor() {}

  ngOnInit() {}
}
