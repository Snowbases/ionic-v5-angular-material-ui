import { Component, OnInit } from "@angular/core";
import { ThemePalette } from "@angular/material/core";
import { ProgressBarMode } from "@angular/material/progress-bar";

@Component({
  selector: 'app-progress-bar-example',
  templateUrl: './progress-bar-example.page.html',
  styleUrls: ['./progress-bar-example.page.scss'],
})
export class ProgressBarExamplePage implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;

  constructor() { }

  ngOnInit() { }
}
