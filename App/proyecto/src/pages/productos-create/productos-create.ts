import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import {Productos } from '../../models/productos';
import { RestProvider } from '../../providers/rest/rest';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'page-productos-create',
  templateUrl: 'productos-create.html',
})
export class ProductosCreatePage {

  productos: Productos = new Productos();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public rest: RestProvider, public toastCtrl: ToastController) {
  }

  save(form: NgForm){
    this.rest.createProducts(form).subscribe(
      result => {
        this.navParams.get("parentPage").getProductos(); //refresh parent page person data
        this.navCtrl.pop();
      }, 
      error => console.log(error)
    );
  }

}