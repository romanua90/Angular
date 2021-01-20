import { Component, OnInit } from '@angular/core';
import {userswithAddress} from "../../../data/users";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any[]= userswithAddress;
  constructor() { }

  ngOnInit(): void {
  }

}
