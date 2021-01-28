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
  user: any;

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
        this.httpClient.get<any>("https://jsonplaceholder.typicode.com/users/" + params.id).subscribe(value => {
          this.user = value;
        })
      }
    );
  }
}
