import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {DocspublicService, MarvelSeries, MarvelSeriesDataWrapper} from '~/marvel-api';
import {ActivatedRoute} from '@angular/router';
import {tap} from 'rxjs/operators';

@Component({
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeriesComponent implements AfterViewInit {
  attributionText: string;
  series: MarvelSeries;
  private readonly seriesId: number;
  period: string;

  constructor(activatedRoute: ActivatedRoute,
              private cdr: ChangeDetectorRef,
              private api: DocspublicService) {
    this.seriesId = activatedRoute.snapshot.params['id'];
    console.log('series id', this.seriesId);
  }

  ngAfterViewInit() {
    this.api.getSeriesIndividual(this.seriesId).pipe(
      tap((response: MarvelSeriesDataWrapper) => {
        this.series = response.data.results[0];
        this.attributionText = response.attributionText;
        this.period = this.series?.startYear + " - " + this.series?.endYear;
        this.cdr.detectChanges();
      })
    ).subscribe();
  }
}
