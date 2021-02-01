import {Injectable, Input} from '@angular/core';
import {ActivatedRoute, Resolve, Router} from "@angular/router";
import {Post} from "../../models/Post";
import {PostService} from "../post/post.service";
import {Observable} from "rxjs";
import {log} from "util";


@Injectable({
  providedIn: 'root'
})

export class PostResolveService implements Resolve<Post[]>{
  post: Post;

  constructor(private postService: PostService) {

  }

  resolve(): Observable<Post[]> | Promise<Post[]> | Post[] {

    return this.postService.getPostByUserId(this.post.id);
  }
}
