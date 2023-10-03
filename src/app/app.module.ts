import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedirectedPageComponent } from './redirected-page/redirected-page.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AuthGuardRedirect } from './auth-redirect.guard';
import { AuthService } from './auth.service';
import { HeaderComponent } from './header/header.component';
import { ReverseRedirectedPageComponent } from './reverse-redirected-page/reverse-redirected-page.component';
import { AuthGuardReverseRedirect } from './auth-reverse-redirect.guard';

@NgModule({
  declarations: [AppComponent, RedirectedPageComponent, HomeComponent, HeaderComponent, ReverseRedirectedPageComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [AuthService, AuthGuardRedirect, AuthGuardReverseRedirect],
  bootstrap: [AppComponent],
})
export class AppModule {}
