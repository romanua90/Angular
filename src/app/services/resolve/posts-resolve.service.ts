import { Injectable } from '@angular/core';
import {Post} from "../../models/Post";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../post/post.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsResolveService {
  posts: Post;

  constructor(private postService: PostService) {

  }

  resolve(): Observable<Post[]> | Promise<Post[]> | Post[] {

    return this.postService.getPosts();
  }

}
