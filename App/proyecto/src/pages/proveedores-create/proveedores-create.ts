import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Proveedores } from '../../models/proveedores';
import { RestProvider } from '../../providers/rest/rest';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-proveedores-create',
  templateUrl: 'proveedores-create.html',
})
export class ProveedoresCreatePage {

  proveedores: Proveedores = new Proveedores();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public rest: RestProvider, public toastCtrl: ToastController) {
  }

  save(form: NgForm){
    this.rest.createProvers(form).subscribe(
      result => {
        this.navParams.get("parentPage").getProveedores(); //refresh parent page person data
        this.navCtrl.pop();
      }, 
      error => console.log(error)
    );
  }

}