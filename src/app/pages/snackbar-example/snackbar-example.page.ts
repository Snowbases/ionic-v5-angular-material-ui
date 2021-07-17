import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-example',
  templateUrl: './snackbar-example.page.html',
  styleUrls: ['./snackbar-example.page.scss'],
})
export class SnackbarExamplePage {

  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

}
