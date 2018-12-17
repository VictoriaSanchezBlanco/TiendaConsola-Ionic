import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import {Moviles } from '../../models/moviles';



@Component({
  selector: 'page-movil',
  templateUrl: 'movil.html'
})
export class MovilPage {

  private moviles: Array<Moviles>;
  private errorMessage: string;

  constructor(public navCtrl: NavController,public rest: RestProvider) { }

  ionViewDidLoad(){
    this.getMoviles();
  
  }

  getMoviles(): any {
    this.rest.getMoviles().subscribe(
      moviles => this.moviles = moviles,
      error => this.errorMessage = error
    );
  }

  showMobilesnById(userId: number){
    this.showMobilesnById(userId);
  }

  getMovilById(userId: number): any {
    this.rest.getMovilById(userId).subscribe(
      (moviles: Moviles) => console.log(JSON.stringify(moviles)),
      error => this.errorMessage = error
    );
  }

}
