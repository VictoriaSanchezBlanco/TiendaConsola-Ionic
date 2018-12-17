import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Productos } from '../../models/productos';
import { NgForm } from '@angular/forms';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-productos-update',
  templateUrl: 'productos-update.html',
})
export class ProductosUpdatePage {

  productos: Productos = new Productos();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public rest: RestProvider) { 
    this.productos = this.navParams.get('productos');
  }

  save(form: NgForm){
    this.rest.updateProducts(form, this.productos.id).subscribe(
      result => {
        this.navParams.get("parentPage").getProductos(); //refresh parent page person data
        this.navCtrl.pop();
      }, 
      error => console.log(error)
    );
  }
}