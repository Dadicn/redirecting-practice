import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedirectedPageComponent } from './redirected-page/redirected-page.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardRedirect } from './auth-redirect.guard';
import { ReverseRedirectedPageComponent } from './reverse-redirected-page/reverse-redirected-page.component';
import { AuthGuardReverseRedirect } from './auth-reverse-redirect.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'redirected', component: RedirectedPageComponent, canActivate: [AuthGuardRedirect] },
  { path: 'reverse-redirected', component: ReverseRedirectedPageComponent, canDeactivate: [AuthGuardReverseRedirect]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
