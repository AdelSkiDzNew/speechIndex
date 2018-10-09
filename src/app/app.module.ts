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
    MatVideoModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
