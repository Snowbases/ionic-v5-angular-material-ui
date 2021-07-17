import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogElementsExampleDialogComponent } from './dialog-elements-example-dialog/dialog-elements-example-dialog.component';

@Component({
  selector: 'app-dialog-elements-example',
  templateUrl: './dialog-elements-example.component.html',
  styleUrls: ['./dialog-elements-example.component.css']
})
export class DialogElementsExampleComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() { }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialogComponent);
  }

}
