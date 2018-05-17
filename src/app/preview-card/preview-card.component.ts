import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'preview-card',
  templateUrl: './preview-card.component.html',
  styleUrls: ['./preview-card.component.css']
})
export class PreviewCardComponent implements OnInit {

  @Input() previewTitle: string;
  @Input('previewDesc') previewDescription: string;
  @Input() previewImageUrl: string;

  constructor() { }

  ngOnInit() {
  }

}
