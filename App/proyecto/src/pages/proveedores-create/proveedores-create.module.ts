import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProveedoresCreatePage } from './proveedores-create';

@NgModule({
    declarations: [
      ProveedoresCreatePage,
    ],
    imports: [
      IonicPageModule.forChild(ProveedoresCreatePage),
    ],
  })
  export class ProveedoresCreatePageModule {}