import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { Usuario } from '../../models/usuario';
import { Proveedores } from '../../models/proveedores';
import { Productos } from '../../models/productos';
import { Moviles } from '../../models/moviles';
// import { SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class RestProvider {

  private baseUrl = 'http://localhost:8080';

  constructor(public http: HttpClient) { }

  private getOptions(){
    let user = "victoria";
    let password = "victoria";
    let base64UserAndPasswordVictoria= window.btoa(user + ":" + password);

    let basico = 'basic ' + base64UserAndPasswordVictoria;

    let options = {
      headers: {
        //'Access-Control-Allow-Origin' : 'http://localhost:8100',
        'Authorization' : basico,
        'Content-Type' : 'application/x-www-form-urlencoded',
      }
      //, withCredentials: true
    };

    return options;
  }

  public getUsuarios(): Observable<Usuario[]> {

    let options = this.getOptions();

    return this.http.get(this.baseUrl + '/tienda_usuarios', options).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  public getUsuariosById(userId: number): Observable<Usuario> {
    
    let options = this.getOptions();

    return this.http.get(this.baseUrl + '/tienda_usuarios/' + userId, options).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  public createUsers(usuarios: any): Observable<any> {
    
    let options = this.getOptions();

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('name', usuarios.name);
    urlSearchParams.append('nif', usuarios.nif);
    urlSearchParams.append('direccion', usuarios.direccion);
    urlSearchParams.append('sexo', usuarios.sexo);
    urlSearchParams.append('email', usuarios.email);
    urlSearchParams.append('comentario', usuarios.comentario);
    urlSearchParams.append('telefono', usuarios.telefono);
    urlSearchParams.append('movil', usuarios.movil);
    urlSearchParams.append('username', usuarios.username);
    urlSearchParams.append('password', usuarios.password);
    let body = urlSearchParams.toString();

    return this.http.post(this.baseUrl + '/tienda_usuarios', body, options).pipe(
      catchError(this.handleError)
    );
  }

  public updateUsers(usuarios: any, userId: number): Observable<any> {
    
    let options = this.getOptions();
    
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('name', usuarios.name);
    urlSearchParams.append('nif', usuarios.nif);
    urlSearchParams.append('direccion', usuarios.direccion);
    urlSearchParams.append('sexo', usuarios.sexo);
    urlSearchParams.append('email', usuarios.email);
    urlSearchParams.append('comentario', usuarios.comentario);
    urlSearchParams.append('telefono', usuarios.telefono);
    urlSearchParams.append('movil', usuarios.movil);
    urlSearchParams.append('username', usuarios.username);
    urlSearchParams.append('password', usuarios.password);
    let body = urlSearchParams.toString();

    return this.http.put(this.baseUrl + '/tienda_usuarios/' + userId, body, options).pipe(
      catchError(this.handleError)
    );
  }

  public deleteUsuarioById(userId: number) {
    
    let options = this.getOptions();

    return this.http.delete(this.baseUrl + '/tienda_usuarios/' + userId, options).pipe(
      catchError(this.handleError)
    );
  }

  public getProveedores(): Observable<Proveedores[]> {

    let options = this.getOptions();

    return this.http.get(this.baseUrl + '/tienda_proveedores', options).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  public getProveedoresById(userId: number): Observable<Usuario> {
    
    let options = this.getOptions();

    return this.http.get(this.baseUrl + '/tienda_proveedores/' + userId, options).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  public createProvers(proveedores: any): Observable<any> {
    
    let options = this.getOptions();

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('name', proveedores.name);
    urlSearchParams.append('nif', proveedores.nif);
    urlSearchParams.append('direccion', proveedores.direccion);
    urlSearchParams.append('sexo', proveedores.sexo);
    urlSearchParams.append('email', proveedores.email);
    urlSearchParams.append('comentario', proveedores.comentario);
    urlSearchParams.append('telefono', proveedores.telefono);
    urlSearchParams.append('movil', proveedores.movil);
    let body = urlSearchParams.toString();

    return this.http.post(this.baseUrl + '/tienda_proveedores', body, options).pipe(
      catchError(this.handleError)
    );
  }

  public updateProvers(proveedores: any, userId: number): Observable<any> {
    
    let options = this.getOptions();
    
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('name', proveedores.name);
    urlSearchParams.append('nif', proveedores.nif);
    urlSearchParams.append('sexo', proveedores.sexo);
    urlSearchParams.append('email', proveedores.email);
    urlSearchParams.append('comentario', proveedores.comentario);
    urlSearchParams.append('telefono', proveedores.telefono);
    let body = urlSearchParams.toString();
    return this.http.put(this.baseUrl + '/tienda_proveedores/' + userId, body, options).pipe(
      catchError(this.handleError)
    );
  }

  public deleteProversById(userId: number) {
    
    let options = this.getOptions();

    return this.http.delete(this.baseUrl + '/tienda_proveedores/' + userId, options).pipe(
      catchError(this.handleError)
    );
  }

  public getProductos(): Observable<Productos[]> {

    let options = this.getOptions();

    return this.http.get(this.baseUrl + '/tienda_productos', options).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  public getProductosById(userId: number): Observable<Productos> {
    
    let options = this.getOptions();

    return this.http.get(this.baseUrl + '/tienda_productos/' + userId, options).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  public createProducts(productos: any): Observable<any> {
    
    let options = this.getOptions();

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('name', productos.name);
    urlSearchParams.append('categoria', productos.categoria);
    urlSearchParams.append('descripcion', productos.descripcion);
    urlSearchParams.append('precio', productos.precio);
    let body = urlSearchParams.toString();

    return this.http.post(this.baseUrl + '/tienda_productos', body, options).pipe(
      catchError(this.handleError)
    );
  }

  public updateProducts(productos: any, userId: number): Observable<any> {
    
    let options = this.getOptions();
    
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('name', productos.name);
    urlSearchParams.append('categoria', productos.categoria);
    urlSearchParams.append('descripcion', productos.descripcion);
    urlSearchParams.append('precio', productos.precio);
    let body = urlSearchParams.toString();

    return this.http.put(this.baseUrl + '/tienda_productos/' + userId, body, options).pipe(
      catchError(this.handleError)
    );
  }

  public deleteProductsById(userId: number) {
    
    let options = this.getOptions();

    return this.http.delete(this.baseUrl + '/tienda_productos/' + userId, options).pipe(
      catchError(this.handleError)
    );
  }

  public getMoviles(): Observable<Moviles[]> {

    let options = this.getOptions();

    return this.http.get(this.baseUrl + '/tienda_moviles', options).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  public getMovilById(userId: number): Observable<Moviles> {
    
    let options = this.getOptions();

    return this.http.get(this.baseUrl + '/tienda_moviles/' + userId, options).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }


  private extractData(res: Response) {
    let body = res;
    console.log(JSON.stringify(body));
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  // @Injectable()
  // db_local: SQLiteObject = null;



  // setDatabase(db: SQLiteObject) {
  //   if (this.db_local === null) {
  //     this.db_local = db;
  //   }
  // }

  // createTable(){
  //   let sql = 'CREATE TABLE IF NOT EXISTS productos(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, nif TEXT,direccion TEXT, sexo TEXT, email TEXT, comentario TEXT, telefono INTEGER, movil INTEGER, username TEXT, password TEXT )';
  //   return this.db_local.executeSql(sql, []);
  // }

  // getAll() {
  //   console.log("se ejecuta getAll");
  //   let sql = 'SELECT * FROM productos';
  //   return this.db_local.executeSql(sql, [])
  //   .then(response => {
  //     let tasks = [];
  //     for (let index = 0; index < response.rows.length; index++) {
  //       tasks.push( response.rows.item(index) );
  //     }
  //     return Promise.resolve( tasks );
  //   })
  //   .catch(error => Promise.reject(error));
  // }

  // create(rest: any){
  //   let sql = 'INSERT INTO productos(name, categoria, descripcion, precio) VALUES(?,?)';
  //   return this.db_local.executeSql(sql, [rest.name, rest.categoria,rest.descripcion,rest.precio]);
  // }

  // update(rest: any){
  //   let sql = 'UPDATE productos SET name=?, categoria=?, descripcion=?, precio=?';
  //   return this.db_local.executeSql(sql, [rest.name, rest.nif,rest.direccion,rest.sexo,rest.email,rest.comentario,rest.telefono,rest.movil,rest.username,rest.password,rest.id]);
  // }

  // delete(rest: any){
  //   let sql = 'DELETE FROM productos WHERE id=?';
  //   return this.db_local.executeSql(sql, [rest.id]);
  // }
}

