import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {FullUserComponent} from "./full-user/full-user.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
    path: 'link/home', component: HomeComponent
  },
    {
      path: 'link/users', component: UsersComponent, children: [
        {path: ':id', component: FullUserComponent}
      ]
    }
  ])
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
