import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Proveedores} from '../../models/proveedores';
import { NgForm } from '@angular/forms';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-proveedores-update',
  templateUrl: 'proveedores-update.html',
})
export class ProveedoresUpdatePage {

  proveedores: Proveedores = new Proveedores();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public rest: RestProvider) { 
    this.proveedores = this.navParams.get('proveedores');
  }

  save(form: NgForm){
    this.rest.updateProvers(form, this.proveedores.id).subscribe(
      result => {
        this.navParams.get("parentPage").getProveedores(); //refresh parent page person data
        this.navCtrl.pop();
      }, 
      error => console.log(error)
    );
  }
}