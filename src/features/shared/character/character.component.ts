import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DocspublicService, MarvelCharacter, MarvelCharacterDataWrapper} from '~/marvel-api';
import {tap} from 'rxjs/operators';
import {Image, ScrollEventData, ScrollView} from '@nativescript/core';

@Component({
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterComponent implements AfterViewInit {
  attributionText: string;
  character: MarvelCharacter;
  private readonly characterId: number;

  constructor(activatedRoute: ActivatedRoute,
              private cdr: ChangeDetectorRef,
              private api: DocspublicService) {
    this.characterId = activatedRoute.snapshot.params['id'];
    console.log('series id', this.characterId);
  }

  ngAfterViewInit() {
    this.api.getCharacterIndividual(this.characterId).pipe(
      tap((response: MarvelCharacterDataWrapper) => {
        this.character = response.data.results[0];
        this.attributionText = response.attributionText;
        this.cdr.detectChanges();
      })
    ).subscribe();
  }

  onScroll($event: ScrollEventData) {
    const scrollView = $event.object as ScrollView;
    const image = scrollView.page.getViewById<Image>('img');
    const scrollY = $event.scrollY;
    if (scrollY < 0) {
      const scrollAmount = Math.abs(scrollY);
      const scale = (scrollAmount + 400) / 400;
      image.scaleX = scale;
      image.scaleY = scale;
      image.translateY = scrollAmount / 2;
    } else {
      image.translateY = -1 * scrollY;
    }
  }
}
