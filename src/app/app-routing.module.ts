import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedirectedPageComponent } from './redirected-page/redirected-page.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardRedirect } from './auth-guard-redirect.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'redirected', component: RedirectedPageComponent, canActivate: [AuthGuardRedirect] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
