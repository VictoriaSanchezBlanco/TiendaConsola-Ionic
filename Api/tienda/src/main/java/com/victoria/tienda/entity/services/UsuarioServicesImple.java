package com.victoria.tienda.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.victoria.tienda.entity.dao.UsuariodeDao;
import com.victoria.tienda.entity.models.Usuario;
@Service
public class UsuarioServicesImple implements UsuarioServices {

	@Autowired
	private UsuariodeDao usuarioDao;

	@Override
	public Usuario get(long id) {
		return usuarioDao.findById(id).get();
	}

	@Override
	public List<Usuario> getAll() {
		return (List<Usuario>) usuarioDao.findAll();
	}

	@Override
	public void post(Usuario tienda_usuarios) {
		usuarioDao.save(tienda_usuarios);
	}

	@Override
	public void put(Usuario tienda_usuarios, long id) {
		usuarioDao.findById(id).ifPresent((x)->{
			tienda_usuarios.setId(id);
			usuarioDao.save(tienda_usuarios);
		});
	}

	@Override
	public void delete(long id) {
		usuarioDao.deleteById(id);
	}
}
