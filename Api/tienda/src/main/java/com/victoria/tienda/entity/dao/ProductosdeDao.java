package com.victoria.tienda.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.victoria.tienda.entity.models.Productos;

public interface ProductosdeDao extends CrudRepository<Productos, Long> {
	
}
