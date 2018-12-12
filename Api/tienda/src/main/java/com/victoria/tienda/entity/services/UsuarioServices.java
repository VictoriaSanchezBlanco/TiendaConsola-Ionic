package com.victoria.tienda.entity.services;

import java.util.List;

import com.victoria.tienda.entity.models.Usuario;

public interface UsuarioServices {

	public Usuario get(long id);
	public List<Usuario>getAll();
	public void post(Usuario tienda_usuarios);
	public void put(Usuario tienda_usuarios, long id);
	public void delete(long id);
}
