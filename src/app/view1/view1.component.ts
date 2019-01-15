import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css'],
  providers: [UsersService],
})
export class View1Component {
  users: Observable<object[]>;
  constructor(private _usersService: UsersService) {
    this.users = this._usersService.getUsers();
  }
}
