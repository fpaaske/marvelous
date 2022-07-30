import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MarvelImage} from '~/marvel-api';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent {
  @Input() nsRouterLink;
  @Input() marvelImage: MarvelImage;
  @Input() title: string;
  @Input() description: string;
}
