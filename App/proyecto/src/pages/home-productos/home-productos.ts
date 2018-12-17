import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Productos} from '../../models/productos';
import { ProductosCreatePage} from '../../pages/productos-create/productos-create';
import { ProductosUpdatePage} from '../../pages/productos-update/productos-update';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


@Component({
  selector: 'page-home-productos',
  templateUrl: 'home-productos.html'
})
export class HomeProductosPage {

  private productos: Array<Productos>;
  private errorMessage: string;

  task: any[] = [];

  constructor(public navCtrl: NavController,public rest: RestProvider,public alertCtrl: AlertController) { }

  ionViewDidLoad(){
    this.getProductos();
    // this.getAllTasks();
  
  }

  getProductos(): any {
    this.rest.getProductos().subscribe(
      productos => this.productos = productos,
      error => this.errorMessage = error
    );
  }

  showProductosnById(userId: number){
    this.showProductosnById(userId);
  }

  getProductosById(userId: number): any {
    this.rest.getProductosById(userId).subscribe(
      (productos: Productos) => console.log(JSON.stringify(productos)),
      error => this.errorMessage = error
    );
  }

  createProducts(){
    this.navCtrl.push(ProductosCreatePage, { "parentPage": this });
  }

  updateProducts(productos: Productos){
    this.navCtrl.push(ProductosUpdatePage, { productos: productos, "parentPage": this });
  }

  deleteProductsById(userId: number){
    this.rest.deleteProductsById(userId).subscribe(
      data => this.productos.splice(
                this.productos.map(item => item.id).indexOf(userId), 1),
      error => this.errorMessage = error
    );
  }


  // getAllTasks(){
  //   this.rest.getAll()
  //   .then(tasks => {
  //     this.task = tasks;
  //   })
  //   .catch( error => {
  //     console.error( error );
  //   });
  // }

  // openAlertNewTask(){
  //   let alert = this.alertCtrl.create({
  //     title: 'Crear tarea',
  //     message: 'escribe el nombre de la tarea',
  //     inputs: [
  //       {
  //         name: 'title',
  //         placeholder: 'Digitar nueva tarea.',
  //       }
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancelar',
  //         handler: () =>{
  //           console.log('cancelar');
  //         }
  //       },
  //       {
  //         text: 'Crear',
  //         handler: (data)=>{ 
  //           data.completed = false;
  //           this.rest.create(data)
  //           .then(response => {
  //             this.task.unshift(data);
  //             console.log("se gragó");
  //           })
  //           .catch( error => {
  //             console.error( error );
  //           })
  //         }
  //       }
  //     ]
  //   });
  //   alert.present();
  // }

  // updateRest(task, index){
  //   task = Object.assign({}, task);
  //   task.completed = !task.completed;
  //   this.rest.update(task)
  //   .then( response => {
  //     this.rest[index] = task;
  //   })
  //   .catch( error => {
  //     console.error( error );
  //   })
  // }

  // deleteTask(task: any, index){
  //   this.rest.delete(task)
  //   .then(response => {
  //     console.log( response );
  //     this.task.splice(index, 1);
  //   })
  //   .catch( error => {
  //     console.error( error );
  //   })
  // }
}
