import { Component, OnInit, } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  myValue: string = '';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  public redirectUser(): void {
    if (this.myValue === 'Nikola') {
     this.auth.redirect();
    }
    return;
  }
}
