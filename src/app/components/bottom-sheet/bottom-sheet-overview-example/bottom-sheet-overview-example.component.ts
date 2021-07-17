import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { BottomSheetOverviewExampleSheetComponent } from './bottom-sheet-overview-example-sheet/bottom-sheet-overview-example-sheet.component';

/**
 * @title Bottom Sheet Overview
 */
@Component({
  selector: 'app-bottom-sheet-overview-example',
  templateUrl: './bottom-sheet-overview-example.component.html',
  styleUrls: ['./bottom-sheet-overview-example.component.css']
})
export class BottomSheetOverviewExampleComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit() { }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheetComponent);
  }

}
