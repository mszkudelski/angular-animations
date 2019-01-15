import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';
import {
  query,
  style,
  stagger,
  transition,
  animate,
  trigger,
} from '@angular/animations';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss'],
  providers: [UsersService],
  animations: [
    trigger('fadeIn', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-5px)' }),
            stagger('50ms', [
              animate(
                '400ms ease-out',
                style({
                  opacity: 1,
                  transform: 'translateY(0px)',
                }),
              ),
            ]),
          ],
          { optional: true },
        ),
      ]),
    ]),
    trigger('fadeOut', [
      transition('* => *', [
        query(
          ':leave',
          [
            style({ opacity: 1 }),
            stagger('50ms', [
              animate(
                '400ms ease-out',
                style({
                  opacity: 0,
                }),
              ),
            ]),
          ],
          { optional: true },
        ),
      ]),
    ]),
  ],
})
export class View1Component {
  users: Observable<object[]>;
  ghostsArr;
  constructor(private _usersService: UsersService) {
    this.getUsers();
  }

  reload() {
    this.getUsers();
  }

  getUsers() {
    this.ghostsArr = new Array(5);
    this.users = this._usersService
      .getUsers()
      .pipe(tap(() => (this.ghostsArr = [])));
  }
}
