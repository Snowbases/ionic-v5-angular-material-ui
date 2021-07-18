import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-checkbox-example',
  templateUrl: './checkbox-example.page.html',
  styleUrls: ['./checkbox-example.page.scss'],
})
export class CheckboxExamplePage implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  constructor() { }

  ngOnInit() { }

}
