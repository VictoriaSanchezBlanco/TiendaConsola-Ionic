package com.victoria.tienda.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.victoria.tienda.entity.models.Usuario;


public interface IAppUserDao extends CrudRepository<Usuario, Long>{
	public Usuario findUserByUsername(String username);
}
