import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import * as moment from 'moment';

import { MatToolbarModule,
         MatInputModule,
         MatCardModule,
         MatButtonModule,
         MatExpansionModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatTableModule,
         MatDialogModule
       } from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ClockComponent } from './clock/clock.component';
import { HeadComponent } from './log/head/head.component';
import { LogComponent } from './log/log.component';
import { LogAddComponent } from './log-add/log-add.component';
import { UserComponent } from './login/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ClockComponent,
    HeadComponent,
    LogComponent,
    LogAddComponent,
    UserComponent
  ],
  entryComponents: [
    UserComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
