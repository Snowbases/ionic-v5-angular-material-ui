import { capitalCase } from "change-case";
import { Subscription } from "rxjs";
import { filter, first } from "rxjs/internal/operators";

import { Component, ViewEncapsulation } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
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
  pages: Pages[] = [];

  routerEvents$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    first()
  );
  routerEvents: Subscription;

  constructor(
    public router: Router,
    public navController: NavController
  ) {
    // Get all routing pages
    this.routerEvents = this.routerEvents$.subscribe(async (event: NavigationEnd) => {
      if (event != undefined) {
        this.pages = this.router.config.filter(result => (result?.path != '' && result?.path != event?.url.split('/').pop())).map((result: any) => ({ url: '/' + result?.path, title: capitalCase(result?.path) }));
      }
    }, (error: any) => {
      console.log('router events error', error);
    });
  }

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
