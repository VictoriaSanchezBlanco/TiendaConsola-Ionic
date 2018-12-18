import { Component } from '@angular/core';
import { IonicPage , NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  myForm: FormGroup;
  
  constructor(public navCtrl: NavController,public formBuilder: FormBuilder) {

    this.myForm = this.createLogin();
  }
  

  saveData(){
    console.log(this.myForm.value);
  }
  
  private createLogin(){
    return this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      })

    };

  gotoAccess(){
    this.navCtrl.push(TabsPage);
  }


}
