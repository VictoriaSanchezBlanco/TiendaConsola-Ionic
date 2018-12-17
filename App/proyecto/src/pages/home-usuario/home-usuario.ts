import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Usuario } from '../../models/usuario';
import { UsuarioCreatePage} from '../usuario-create/usuario-create';
import { UsuarioUpdatePage} from '../usuario-update/usuario-update';

@Component({
  selector: 'page-home-usuario',
  templateUrl: 'home-usuario.html'
})
export class HomeUsuarioPage {

  private usuarios: Array<Usuario>;
  private errorMessage: string;

  constructor(public navCtrl: NavController,public rest: RestProvider) { }

  ionViewDidLoad(){
    this.getUsuarios();
  
  }

  getUsuarios(): any {
    this.rest.getUsuarios().subscribe(
      usuarios => this.usuarios = usuarios,
      error => this.errorMessage = error
    );
  }

  showUsuariosnById(userId: number){
    this.showUsuariosnById(userId);
  }

  getUsuariosById(userId: number): any {
    this.rest.getUsuariosById(userId).subscribe(
      (usuario: Usuario) => console.log(JSON.stringify(usuario)),
      error => this.errorMessage = error
    );
  }

  createUsers(){
    this.navCtrl.push(UsuarioCreatePage, { "parentPage": this });
  }

  updateUsers(usuarios: Usuario){
    this.navCtrl.push(UsuarioUpdatePage, { usuario: usuarios, "parentPage": this });
  }

  deleteUsuarioById(userId: number){
    this.rest.deleteUsuarioById(userId).subscribe(
      data => this.usuarios.splice(
                this.usuarios.map(item => item.id).indexOf(userId), 1),
      error => this.errorMessage = error
    );
  }
}
