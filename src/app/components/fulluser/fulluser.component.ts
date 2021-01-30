import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../models/User";

@Component({
  selector: 'app-fulluser',
  templateUrl: './fulluser.component.html',
  styleUrls: ['./fulluser.component.css']
})
export class FulluserComponent implements OnInit {
user: User;
  constructor(private router: Router, private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(() => {
      this.user = this.router.getCurrentNavigation().extras.state as User;
    })
  }

  ngOnInit(): void {
  }

}
