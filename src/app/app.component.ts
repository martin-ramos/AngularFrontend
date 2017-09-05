import { Component } from '@angular/core';
import { UserService } from "app/services/user.service";
import { DataTableResource } from 'angular-2-data-table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  users;

  constructor(private userService: UserService) {
     this.users = userService.getUsers();
  }
}
