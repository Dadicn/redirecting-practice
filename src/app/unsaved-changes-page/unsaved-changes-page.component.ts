import { Component, OnInit } from '@angular/core';
import { CanComponentDeactivate } from '../auth-reverse-redirect.guard';
import { MatDialog } from '@angular/material/dialog';
import { ExampleDialogComponent } from '../example-dialog/example-dialog.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-unsaved-changes-page',
  templateUrl: './unsaved-changes-page.component.html',
  styleUrls: ['./unsaved-changes-page.component.scss'],
})
export class UnsavedChangesPageComponent
  implements OnInit, CanComponentDeactivate
{
  myValue: string = '';
  initialValue: string = '';
  unsavedChanges = false;

  constructor(private dialog: MatDialog) {
    this.initialValue = this.myValue;
  }

  ngOnInit(): void {}

  canDeactivate(): boolean | Observable<boolean> {
    if (this.unsavedChanges) {
      const dialogRef = this.dialog.open(ExampleDialogComponent);
      return dialogRef.afterClosed();
    }

    return true;
  }

  onInputChange() {
    this.unsavedChanges = this.myValue !== this.initialValue;
  }
}
