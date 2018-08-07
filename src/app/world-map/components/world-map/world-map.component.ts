import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import * as L from "leaflet";
import { Store } from "../../../../../node_modules/@ngrx/store";
import { take, map, tap } from "../../../../../node_modules/rxjs/operators";
import { IBlogPost } from "../../../model/blogPost.model";
import { IAppState } from "../../../store/store";
import { Router } from "../../../../../node_modules/@angular/router";

@Component({
  selector: "app-world-map",
  templateUrl: "./world-map.component.html",
  styleUrls: ["./world-map.component.css"]
})
export class WorldMapComponent implements OnInit {
  locations: IBlogPost[];
  selectedLocation: IBlogPost;
  options = {
    layers: [
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "..."
      })
    ],
    zoom: 3,
    center: L.latLng(20, 0)
  };
  mapIcon = {
    icon: L.icon({
      iconUrl: "././../../../../assets/map-pin.png",
      iconSize: [48, 48],
      iconAnchor: [15, 48]
    })
  };
  leafletZoom = 3;
  leafletCenter: L.LatLng;
  markerLayers: L.Marker<any>[];

  constructor(
    private store: Store<IAppState>,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.store
      .select("posts", "blogs")
      .pipe(
        take(1),
        map((blogs: IBlogPost[]) => {
          this.locations = blogs;
          this.markerLayers = blogs.map(blog => {
            return L.marker([blog.lat, blog.lng], this.mapIcon).on(
              "click",
              this.onMarkerClick.bind(this)
            );
          });
        })
      )
      .subscribe();
  }
  onMapReady(map: L.Map) {
    map.scrollWheelZoom.disable();
  }

  onMarkerClick(e) {
    const selectedLoc = this.locations.find(location => {
      return location.lat == e.latlng.lat && location.lng == e.latlng.lng;
    });
    this.selectedLocation = selectedLoc;
    this.cd.detectChanges();
  }
}
