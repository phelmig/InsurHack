import {
  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
  selector: 'app-kelly-monster-page',
  templateUrl: './kelly-monster-page.component.html',
  styleUrls: ['./kelly-monster-page.component.styl'],
  animations: [
  trigger('flyInOut', [
    state('in', style({transform: 'translateX(0)'})),
    transition('void => *', [
      style({transform: 'translateX(-100%)'}),
      animate(100)
    ]),
    transition('* => void', [
      animate(100, style({transform: 'translateX(100%)'}))
    ])
  ])
]

})
export class KellyMonsterPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
