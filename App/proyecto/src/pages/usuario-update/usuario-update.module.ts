import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsuarioUpdatePage } from './usuario-update';

@NgModule({
  declarations: [
    UsuarioUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(UsuarioUpdatePage),
  ],
})
export class UsuarioUpdatePageModule {}