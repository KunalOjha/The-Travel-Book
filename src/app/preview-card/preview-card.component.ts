import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'preview-card',
  templateUrl: './preview-card.component.html',
  styleUrls: ['./preview-card.component.css', '../../blog-card.css']
})
export class PreviewCardComponent implements OnInit {

  @Input() showPreview: boolean;
  @Input() previewTitle: string = "My Journey to Machu Pichu";
  @Input('previewDesc') previewDescription: string= "My first Solo Trip, which was an experience I'll never forget..";
  @Input() previewImageUrl: string ="http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/w3css/img_mountains_wide.jpg";

  constructor() { }

  ngOnInit() {
  }

}
