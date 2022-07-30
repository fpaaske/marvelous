import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {DocspublicService, MarvelComic} from '~/marvel-api';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComicComponent {
  attributionText: string;
  comic: MarvelComic;
  private readonly comicId: number;

  constructor(activatedRoute: ActivatedRoute,
              private cdr: ChangeDetectorRef,
              private api: DocspublicService) {
    this.comicId = activatedRoute.snapshot.params['id'];
    console.log('series id', this.comicId);
  }
}
