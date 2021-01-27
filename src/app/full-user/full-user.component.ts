import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User} from "../../models/User";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit {
  @Input()
  user;
  id: any;

  constructor(private activatedRoute: ActivatedRoute,private httpClient: HttpClient) {
    this.activatedRoute.params.subscribe(value => {
        this.id = +(value.id);
      console.log(this.id)
      }
    )
  }

  ngOnInit(): void {
    this.httpClient.get<User[]>("https://jsonplaceholder.typicode.com/users/"+this.id).subscribe(value=> {
      this.user = value;
    })
  }

}
