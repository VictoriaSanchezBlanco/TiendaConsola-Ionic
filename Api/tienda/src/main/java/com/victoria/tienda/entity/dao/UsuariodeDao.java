package com.victoria.tienda.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.victoria.tienda.entity.models.Usuario;

public interface UsuariodeDao extends CrudRepository <Usuario, Long> {

}
