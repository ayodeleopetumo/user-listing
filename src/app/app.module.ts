import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsersService } from './users.service';

import { AppComponent } from './app.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersComponent } from './users/users.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [AppComponent, UserDetailComponent, UsersComponent, MapComponent],
  imports: [BrowserModule, HttpModule, HttpClientModule, FormsModule],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
