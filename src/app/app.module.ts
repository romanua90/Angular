import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {UsersComponent} from './components/users/users.component';
import {RouterModule, Routes} from "@angular/router";
import {UserResolveService} from "./services/resolve/user-resolve.service";
import {UserComponent} from './components/user/user.component';
import { FulluserComponent } from './components/fulluser/fulluser.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import {PostResolveService} from "./services/resolve/post-resolve.service";

const routes: Routes = [
   // {path: '', redirectTo: "", pathMatch: 'full'},
  {path: 'link/users', component: UsersComponent, resolve: {usersData: UserResolveService},
  children: [
    {path: ':id', component: FulluserComponent },
    {path:'posts', component: PostsComponent, resolve: {postsData: PostResolveService}}
  ]
  }

];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    FulluserComponent,
    PostComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
