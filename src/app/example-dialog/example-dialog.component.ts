import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-example-dialog',
  templateUrl: './example-dialog.component.html',
  styleUrls: ['./example-dialog.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule]
})
export class ExampleDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ExampleDialogComponent>) { }

  ngOnInit(): void {
  }

  confirmLeave(leave: boolean): void {
    this.dialogRef.close(leave);
  }

}
