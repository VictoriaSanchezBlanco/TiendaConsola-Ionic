import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpClientModule } from '@angular/common/http';
import { FormularioPage } from '../pages/formulario/formulario';
import { LoginPage } from '../pages/login/login';
import { HomeUsuarioPage } from '../pages/home-usuario/home-usuario';
import { UsuarioCreatePage} from '../pages/usuario-create/usuario-create';
import { UsuarioUpdatePage} from '../pages/usuario-update/usuario-update';
import { HomeProveedoresPage} from '../pages/home-proveedores/home-proveedores';
import { ProveedoresCreatePage} from '../pages/proveedores-create/proveedores-create';
import { ProveedoresUpdatePage} from '../pages/proveedores-update/proveedores-update';
import { HomeProductosPage} from '../pages/home-productos/home-productos';
import { ProductosCreatePage} from '../pages/productos-create/productos-create';
import { ProductosUpdatePage} from '../pages/productos-update/productos-update';
import {MovilPage} from '../pages/movil/movil';
import { RestProvider } from '../providers/rest/rest';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    FormularioPage,
    LoginPage,
    HomeUsuarioPage,
    UsuarioCreatePage,
    UsuarioUpdatePage,
    HomeProveedoresPage,
    ProveedoresCreatePage,
    ProveedoresUpdatePage,
    HomeProductosPage,
    ProductosCreatePage,
    ProductosUpdatePage,
    MovilPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    FormularioPage,
    LoginPage,
    HomeUsuarioPage,
    UsuarioCreatePage,
    UsuarioUpdatePage,
    HomeProveedoresPage,
    ProveedoresCreatePage,
    ProveedoresUpdatePage,
    HomeProductosPage,
    ProductosCreatePage,
    ProductosUpdatePage,
    MovilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
