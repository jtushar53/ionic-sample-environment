import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ENV } from '@environment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  env;
  constructor(public navCtrl: NavController) {
    this.env = ENV.API_ENDPOINT;
  }

}
