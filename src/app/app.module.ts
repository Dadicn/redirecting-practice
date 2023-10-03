import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedirectedPageComponent } from './redirected-page/redirected-page.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AuthGuardRedirect } from './auth-guard-redirect.guard';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [AppComponent, RedirectedPageComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [AuthService, AuthGuardRedirect],
  bootstrap: [AppComponent],
})
export class AppModule {}
