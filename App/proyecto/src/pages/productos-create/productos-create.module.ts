import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductosCreatePage } from './productos-create';

@NgModule({
    declarations: [
      ProductosCreatePage,
    ],
    imports: [
      IonicPageModule.forChild(ProductosCreatePage),
    ],
  })
  export class ProductosCreatePageModule {}