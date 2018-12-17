import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Proveedores} from '../../models/proveedores';
import { ProveedoresCreatePage} from '../../pages/proveedores-create/proveedores-create';
import { ProveedoresUpdatePage} from '../../pages/proveedores-update/proveedores-update';


@Component({
  selector: 'page-home-proveedores',
  templateUrl: 'home-proveedores.html'
})
export class HomeProveedoresPage {

  private proveedores: Array<Proveedores>;
  private errorMessage: string;

  constructor(public navCtrl: NavController,public rest: RestProvider) { }

  ionViewDidLoad(){
    this.getProveedores();
  
  }

  getProveedores(): any {
    this.rest.getProveedores().subscribe(
      proveedores => this.proveedores = proveedores,
      error => this.errorMessage = error
    );
  }

  showProveedoresnById(userId: number){
    this.showProveedoresnById(userId);
  }

  getProveedoresById(userId: number): any {
    this.rest.getProveedoresById(userId).subscribe(
      (proveedores: Proveedores) => console.log(JSON.stringify(proveedores)),
      error => this.errorMessage = error
    );
  }

  createProvers(){
    this.navCtrl.push(ProveedoresCreatePage, { "parentPage": this });
  }

  updateProvers(proveedores: Proveedores){
    this.navCtrl.push(ProveedoresUpdatePage, { proveedores: proveedores, "parentPage": this });
  }

  deleteProversById(userId: number){
    this.rest.deleteProversById(userId).subscribe(
      data => this.proveedores.splice(
                this.proveedores.map(item => item.id).indexOf(userId), 1),
      error => this.errorMessage = error
    );
  }
}
