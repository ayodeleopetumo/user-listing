import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './users.service';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [AppComponent, ModalComponent, UserDetailComponent, UsersComponent],
  imports: [BrowserModule, HttpModule, HttpClientModule],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
