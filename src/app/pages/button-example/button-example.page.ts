import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-button-example',
  templateUrl: './button-example.page.html',
  styleUrls: ['./button-example.page.scss'],
})
export class ButtonExamplePage implements OnInit {

  constructor(public navController: NavController) { }

  ngOnInit() {
  }

  async navigateForward(url: string): Promise<void> {
    try {
      await this.navController.navigateRoot(url, {
        animationDirection: 'forward'
      });
    } catch (error) {
      console.log('navigateForward error', error);
    }
  }

}
