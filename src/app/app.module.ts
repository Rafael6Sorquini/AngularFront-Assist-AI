import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routes'; 
import { LoginComponent } from './login/login.component'; 

@NgModule({
  declarations: [
    LoginComponent 
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule 
  ],
  providers: [], 

})
export class AppModule { }
