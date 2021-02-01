import { Component, OnInit } from '@angular/core';
import {User} from "../../models/User";
import {ActivatedRoute, Router} from "@angular/router";
import {Post} from "../../models/Post";

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {
  post: Post;
  constructor(private router: Router, private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(() => {
      this.post = this.router.getCurrentNavigation().extras.state as Post;
    })
  }

  ngOnInit(): void {
  }

}
