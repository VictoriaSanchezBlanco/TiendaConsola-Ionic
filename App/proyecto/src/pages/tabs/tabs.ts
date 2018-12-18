import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { HomeProveedoresPage } from '../home-proveedores/home-proveedores';
// import { HomeUsuarioPage } from '../home-usuario/home-usuario';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = HomeProveedoresPage;
  // tab3Root = HomeUsuarioPage;

  constructor() {

  }
}
