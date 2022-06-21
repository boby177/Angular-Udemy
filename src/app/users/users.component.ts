import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'Bob'
    },
    {
      id: 2,
      name: 'Asep'
    },
    {
      id: 3,
      name: 'Dida'
    },
    {
      id: 4,
      name: 'Albert'
    }
  ];
}
