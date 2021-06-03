import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public users: any = [];

  filterTerm: string;

  constructor(private userService: UserService) {
    //console.log(userService);
    //console.log(this.users);
  }
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((res) => {
      this.users = res;
    });
  }
}
