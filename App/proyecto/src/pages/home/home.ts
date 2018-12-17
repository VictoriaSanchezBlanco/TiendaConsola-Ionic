import { Component} from '@angular/core';
import { NavController} from 'ionic-angular';
import { FormularioPage} from '../formulario/formulario';
import { LoginPage } from '../login/login';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  
  constructor(public navCtrl: NavController){;


  }


  gotoformulario(){
    this.navCtrl.push(FormularioPage);
  }

  gotoLogin(){
    this.navCtrl.push(LoginPage);
  }

}
