import {Component, OnInit, Output} from '@angular/core';
import {User} from "../../models/User";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Output()
users: User[];
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(value=>{
    this.users=value;
  });
  }

}
