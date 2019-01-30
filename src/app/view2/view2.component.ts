import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  animate,
  style,
  state,
} from '@angular/animations';
import { timer } from 'rxjs';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.scss'],
  animations: [
    trigger('move', [
      state('void', style({ transform: 'translateY(100px)' })),
      transition(':enter', [
        animate('1000ms ease-in-out', style({ transform: 'translateY(0)' })),
      ]),
      transition(':increment', [
        animate('500ms ease-in-out', style({ transform: 'translateX(50px)' })),
        animate('500ms ease-in-out', style({ transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class View2Component {
  timer = timer(1000, 1000);
}
