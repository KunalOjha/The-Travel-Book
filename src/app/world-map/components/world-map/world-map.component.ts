import { Component, OnInit } from "@angular/core";
import * as L from "leaflet";
import { MapService } from "../../../map.service";

@Component({
  selector: "app-world-map",
  templateUrl: "./world-map.component.html",
  styleUrls: ["./world-map.component.css"]
})
export class WorldMapComponent implements OnInit {
  leafletZoom = 3;
  selectedLocation = "Select a location";
  options = {
    layers: [
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "..."
      })
    ],
    zoom: 3,
    center: L.latLng(20, 0)
  };
  leafletCenter: L.LatLng;
  markerLayers: L.Marker<any>[];

  constructor(private mapService: MapService) {}

  ngOnInit() {
    this.markerLayers = this.mapService.locations.map(location => {
      return L.marker([location.lat, location.lng], {
        icon: L.icon({
          iconUrl: "././../../../../assets/map-pin.png",
          iconSize: [48, 48],
          iconAnchor: [15, 48]
        })
      }).on("click", this.onMarkerClick.bind(this));
    });
  }
  onMapReady(map: L.Map) {
    map.scrollWheelZoom.disable();
  }

  onMarkerClick(e) {
    const selectedLoc = this.mapService.locations.find(location => {
      return location.lat == e.latlng.lat && location.lng == e.latlng.lng;
    });

    this.selectedLocation = selectedLoc.name;
  }
}
