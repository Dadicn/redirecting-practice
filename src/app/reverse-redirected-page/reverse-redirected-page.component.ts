import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reverse-redirected-page',
  templateUrl: './reverse-redirected-page.component.html',
  styleUrls: ['./reverse-redirected-page.component.scss'],
})
export class ReverseRedirectedPageComponent implements OnInit {
  myValue: string = '';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.isCorrectSurname = false;
  }

  public exitPage(): void {
    if (this.myValue === 'Dadic') {
      this.auth.exit();
    } 
  }
}
