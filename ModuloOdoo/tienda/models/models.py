# -*- coding: utf-8 -*-

from odoo import models, fields, api

class usuarios(models.Model):
   _name = 'tienda.usuarios'

   name = fields.Char(string="Nombre y Apellidos")
   nif = fields.Char(string="NIF")
   direccion = fields.Char(string="Dirección")
   telefono = fields.Integer(string="Teléfono")
   movil = fields.Integer(string="Móvil")
   sexo = fields.Selection([('Sexo Femenino','Mujer'),('Sexo Masculino','Hombre')],string="Sexo")
   email = fields.Char(string="Email")
   comentario = fields.Text(string="Comentario")
   username = fields.Char(string="Username")
   password = fields.Char(string="Password")
   productos_ids = fields.Many2many('tienda.productos', string="Productos")

class proveedores(models.Model):
   _name = 'tienda.proveedores'

   name = fields.Char(string="Nombre y Apellidos")
   nif = fields.Char(string="NIF")
   direccion = fields.Char(string="Dirección")
   telefono = fields.Integer(string="Teléfono")
   movil = fields.Integer(string="Móvil")
   sexo = fields.Selection([('Sexo Femenino','Mujer'),('Sexo Masculino','Hombre')],string="Sexo")
   email = fields.Char(string="Email")
   comentario = fields.Text(string="Comentario")
     
class productos(models.Model):
   _name = 'tienda.productos'

   name = fields.Char(string="Nombre")
   categoria = fields.Selection([('placasIntel','Placas Base Intel'),('placasAMD','Placas Base AMD'),('memoriasRAM','Memorias RAM'),('tarjetasGraficas','Tarjetas Gráficas'),('torres','Torres'),('procesadoresIntel','Procesadores Intel'),('procesadoresAMD','Procesadores AMD'),('ventiladores','Ventiladores'),('fuentesAlimentacion','Fuentes Alimentación'),('tarjetasSonido','Tarjetas de Sonido'),('pectoresTarjeta','Lectores de Tarjetas'),('portada','Portada')],string="Categoria")
   precio = fields.Float(string="Precio")
   descripcion = fields.Text(string="Descripción")
   image = fields.Binary(string="image")
   usuarios_id = fields.Many2many('tienda.usuarios', string="Usuarios")

class moviles(models.Model):
   _name = 'tienda.moviles'

   name = fields.Char(string="Nombre")
   descripcion = fields.Text(string="Descripción")
   precio = fields.Float(string="Precio")
   image = fields.Binary(string="image")


class roles(models.Model):
   _name = 'tienda.roles'

   roles = fields.Char(string="Roles")
   user_id = fields.Many2one('tienda.usuarios', string="ID")
