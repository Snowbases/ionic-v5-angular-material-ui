import { Component, ViewEncapsulation } from "@angular/core";
import { NavController } from "@ionic/angular";

export interface Pages {
  url: string;
  title: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage {

  pages: Pages[] = [
    { url: '/button-overview-example', title: 'Button' },
    { url: '/snackbar-example', title: 'Snackbar' },
    { url: '/dialog-example', title: 'Dialog' }
  ];

  constructor(
    public navController: NavController
  ) { }

  async navigateForward(url: string): Promise<void> {
    try {
      await this.navController.navigateForward(url, {
        animationDirection: 'forward'
      });
    } catch (error) {
      console.log('navigateForward error', error);
    }
  }
}
