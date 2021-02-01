import {Component, OnInit, Output} from '@angular/core';
import {Post} from "../../models/Post";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Output()
posts: Post[];
  constructor(private activatedRouter: ActivatedRoute) {
    this.activatedRouter.data.subscribe(value => this.posts=value.postsData)
  }

  ngOnInit(): void {
  }

}
