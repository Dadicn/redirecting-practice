import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CanComponentDeactivate } from '../auth-reverse-redirect.guard';

@Component({
  selector: 'app-reverse-redirected-page',
  templateUrl: './reverse-redirected-page.component.html',
  styleUrls: ['./reverse-redirected-page.component.scss'],
})
export class ReverseRedirectedPageComponent implements OnInit, CanComponentDeactivate {
  myValue: string = '';

  constructor() {}

  ngOnInit(): void {
  }

  canDeactivate(): boolean {
    if (this.myValue === 'Dadic') {
      return true;
    }
    return false;
  }
}
