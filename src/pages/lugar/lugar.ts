import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TerceraPage } from '../tercera/tercera';
import { HomePage } from '../home/home';
import { LugaresService } from '../../services/lugares.service';

/**
 * Generated class for the LugarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lugar',
  templateUrl: 'lugar.html',
})
export class LugarPage {
  lugar:any = { };
  lugaresService: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public LugaresService:LugaresService) {
    this.lugar = navParams.get('lugar');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LugarPage');
  }

  guardarLugar() {
    
    lugar.id = Date.now();
    this.lugaresService.createLugar(lugar);
    console.log(lugar);
  }


}
