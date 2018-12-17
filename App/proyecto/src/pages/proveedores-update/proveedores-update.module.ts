import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {ProveedoresUpdatePage} from './proveedores-update';

@NgModule({
  declarations: [
    ProveedoresUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(ProveedoresUpdatePage),
  ],
})
export class ProveedoresUpdatePageModule {}