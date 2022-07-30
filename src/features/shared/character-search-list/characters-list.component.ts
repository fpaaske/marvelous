import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {DocspublicService, MarvelCharacter, MarvelCharacterDataWrapper} from '~/marvel-api';
import {ItemEventData} from '@nativescript/core';
import {first, tap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'character-list, [character-list]',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersListComponent implements OnChanges, AfterViewInit {
  @Input() nameStartsWith: string;
  @Input() series: number[];

  characters: Array<MarvelCharacter> = new Array<MarvelCharacter>();

  constructor(activatedRoute: ActivatedRoute,
              private cdr: ChangeDetectorRef,
              private api: DocspublicService) {
    console.log('params', activatedRoute.snapshot.params)
    if (activatedRoute.snapshot.paramMap.has('seriesId')) {
      this.series = [+activatedRoute.snapshot.params['seriesId']];
    }
  }

  ngAfterViewInit() {
    this.loadMoreItems();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('CharacterListComponent::onChanges!');
    const nameStartsWithChange = changes.nameStartsWith;
    const seriesChange = changes.series;
    if ((nameStartsWithChange?.currentValue !== nameStartsWithChange?.previousValue) ||
      (seriesChange?.currentValue !== seriesChange?.previousValue)) {
      this.characters.length = 0;
      this.cdr.markForCheck();
      this.loadMoreItems();
    }
  }

  itemTap($event: ItemEventData) {
    console.log($event.index, this.characters[$event.index].name);
  }

  loadMoreItems() {
    const offset = this.characters.length;
    this.api.getCreatorCollection_8(undefined, this.nameStartsWith, undefined, undefined, this.series, undefined, undefined, undefined, 40, offset)
      .pipe(
        tap((response: MarvelCharacterDataWrapper) => {
          const marvelCharacters = response.data.results;
          console.log('Marvel Characters: ' + marvelCharacters.length)
          if (marvelCharacters.length > 0) {
            console.log(marvelCharacters[0].name, marvelCharacters[0].thumbnail);
          }
          this.characters.push(...marvelCharacters);
          this.characters.forEach((c, i) => {
            if (c == null) {
              console.log(`element at ${i} is null`);
            }
          })
          this.cdr.markForCheck();
        })
      )
      .subscribe();
  }
}
