import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/store';
import { filter, switchMap, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { IBlogPost } from '../model/blogPost.model';

@Component({
  selector: 'preview-card',
  templateUrl: './preview-card.component.html',
  styleUrls: ['./preview-card.component.css', '../../blog-card.css']
})
export class PreviewCardComponent {

  @Input() previewPost: IBlogPost;

  constructor(private route: ActivatedRoute, private store: Store<IAppState>) { }
}
