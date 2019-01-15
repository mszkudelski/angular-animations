import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class UsersService {
  getUsers(): Observable<object[]> {
    return of([
      {
        id: 123,
        name: 'User user',
        age: 23,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
        avatar: 'https://picsum.photos/50',
      },
      {
        id: 123,
        name: 'User user',
        age: 23,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
        avatar: 'https://picsum.photos/50',
      },
      {
        id: 123,
        name: 'User user',
        age: 23,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
        avatar: 'https://picsum.photos/50',
      },
      {
        id: 123,
        name: 'User user',
        age: 23,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
        avatar: 'https://picsum.photos/50',
      },
      {
        id: 123,
        name: 'User user',
        age: 23,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
        avatar: 'https://picsum.photos/50',
      },
    ]).pipe(delay(500));
  }
}
