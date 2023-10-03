import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirected-page',
  templateUrl: './redirected-page.component.html',
  styleUrls: ['./redirected-page.component.scss']
})
export class RedirectedPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public back(): void {
    this.router.navigate([''])
  }

}
