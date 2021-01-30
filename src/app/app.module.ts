import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {UsersComponent} from './components/users/users.component';
import {RouterModule, Routes} from "@angular/router";
import {UserResolveService} from "./services/resolve/user-resolve.service";
import {UserComponent} from './components/user/user.component';
import { FulluserComponent } from './components/fulluser/fulluser.component';

const routes: Routes = [
  {path: '', redirectTo: "users", pathMatch: 'full'},
  {path: 'users', component: UsersComponent, resolve: {usersData: UserResolveService},
  children: [
    {path: ':id', component: FulluserComponent }
  ]
  }

];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    FulluserComponent
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
