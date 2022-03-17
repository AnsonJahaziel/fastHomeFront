import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseInfoPageRoutingModule } from './house-info-routing.module';

import { HouseInfoPage } from './house-info.page';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontAwesomeModule,
    HouseInfoPageRoutingModule
  ],
  declarations: [HouseInfoPage]
})
export class HouseInfoPageModule {}
