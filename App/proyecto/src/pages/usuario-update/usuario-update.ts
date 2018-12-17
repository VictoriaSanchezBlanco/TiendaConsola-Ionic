import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../models/usuario';
import { NgForm } from '@angular/forms';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-usuario-update',
  templateUrl: 'usuario-update.html',
})
export class UsuarioUpdatePage {

  usuario: Usuario = new Usuario();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public rest: RestProvider) { 
    this.usuario = this.navParams.get('usuario');
  }

  save(form: NgForm){
    this.rest.updateUsers(form, this.usuario.id).subscribe(
      result => {
        this.navParams.get("parentPage").getUsuarios(); //refresh parent page person data
        this.navCtrl.pop();
      }, 
      error => console.log(error)
    );
  }
}