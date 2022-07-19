import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';

import {
  DialogFromMenuExampleDialogComponent,
} from './dialog-from-menu-example-dialog/dialog-from-menu-example-dialog.component';

@Component({
  selector: 'app-dialog-from-menu-example',
  templateUrl: './dialog-from-menu-example.component.html',
  styleUrls: [
    './dialog-from-menu-example.component.css'
  ]
})
export class DialogFromMenuExampleComponent implements OnInit {
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogFromMenuExampleDialogComponent, { restoreFocus: false });

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }
}
