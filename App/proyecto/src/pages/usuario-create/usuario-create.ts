import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Usuario } from '../../models/usuario';
import { RestProvider } from '../../providers/rest/rest';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-usuario-create',
  templateUrl: 'usuario-create.html',
})
export class UsuarioCreatePage {

  usuario: Usuario = new Usuario();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public rest: RestProvider, public toastCtrl: ToastController) {
  }

  save(form: NgForm){
    this.rest.createUsers(form).subscribe(
      result => {
        this.navParams.get("parentPage").getUsuarios(); //refresh parent page person data
        this.navCtrl.pop();
      }, 
      error => console.log(error)
    );
  }

}