import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Post} from "../../models/Post";

@Component({
  selector: 'app-full-post',
  templateUrl: './choosen-posts.component.html',
  styleUrls: ['./choosen-posts.component.css']
})
export class ChoosenPostsComponent implements OnInit {
  post: Post;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.post = value.postData)
  }

  ngOnInit(): void {
  }

}
