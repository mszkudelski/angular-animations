import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { timer } from 'rxjs';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.scss'],
  animations: [
    trigger('move', [
      transition('* => *', [
        animate('500ms ease-in-out', style({ transform: 'translateX(50px)' })),
        animate('500ms ease-in-out', style({ transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class View2Component {
  timer = timer(1000, 1000);
}
