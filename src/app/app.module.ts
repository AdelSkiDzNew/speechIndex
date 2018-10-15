import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/component/authentication.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './routing';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatVideoModule } from 'mat-video';
import { MatPaginatorModule, MatProgressBarModule } from '@angular/material';
import {NgxPaginationModule} from 'ngx-pagination';
import { ApiAudio } from './commun/api.audio';
import { HomeService } from './home/home.service';
import { WindowRef } from './commun/window';



@NgModule({
  
  declarations: [
    AppComponent,
    AuthenticationComponent,
    HomeComponent
   
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatVideoModule,
    NgxPaginationModule,
    MatProgressBarModule
  
  ],
  providers: [ApiAudio,HomeService,WindowRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
