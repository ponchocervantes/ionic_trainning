import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LugarPage } from './lugar';
import { LugaresService } from '../../services/lugares.service';

@NgModule({
  declarations: [
    LugarPage,
    LugaresService
  ],
  imports: [
    IonicPageModule.forChild(LugarPage),
  ],
})
export class LugarPageModule {}
