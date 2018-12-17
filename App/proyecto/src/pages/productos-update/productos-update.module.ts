import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {ProductosUpdatePage} from './productos-update';


@NgModule({
  declarations: [
    ProductosUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(ProductosUpdatePage),
  ],
})
export class ProductosUpdatePageModule {}