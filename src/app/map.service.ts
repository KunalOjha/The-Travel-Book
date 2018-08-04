import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MapService {
  locations = [
    { name: "Salkantay Trek", lat: -13.532, lng: -72.545 },
    { name: "Machu Pichu", lat: -13.1631, lng: -71.545 },
    { name: "Kanha National Park", lat: 22.3345, lng: 80.6115 },
    { name: "New Orleans", lat: 29.9511, lng: -90.0715 },
    { name: "Chicago River Walk", lat: 41.8781, lng: -87.6298 },
    { name: "London", lat: 51.5074, lng: 0.1278 },
    { name: "Niagara Falls", lat: 43.0962, lng: -79.0377 },
    { name: "Nashville", lat: 36.1627, lng: -86.7816 },
    { name: "New York", lat: 40.7128, lng: -74.006 },
    { name: "Barcelona", lat: 41.3851, lng: 2.1734 }
  ];

  constructor() {}
}
