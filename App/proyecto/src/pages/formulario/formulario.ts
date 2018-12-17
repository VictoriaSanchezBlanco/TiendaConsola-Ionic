import { Component } from '@angular/core';
import { IonicPage , NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {

  myForm: FormGroup;
  
  constructor(public navCtrl: NavController,public formBuilder: FormBuilder) {

    this.myForm = this.createFormulario();
  }
  
  saveData(){
    console.log(this.myForm.value);
  }
  
  private createFormulario(){
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      surname: ['', [Validators.required,Validators.minLength(5), Validators.maxLength(15)]],
      address: ['', [Validators.required,Validators.minLength(20), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      dateBirth: ['', Validators.required],
      gender: ['', Validators.required],
      username: ['', [Validators.required,Validators.minLength(5), Validators.maxLength(15)]],
      password: ['', Validators.compose([Validators.required,Validators.pattern('^(?=.*[-!#$%&/()?¡_])(?=.*[A-Z])(?=.*[a-z]).{8,}')])],

    })
  }

  save(){
    this.navCtrl.push(TabsPage);
  }
}
