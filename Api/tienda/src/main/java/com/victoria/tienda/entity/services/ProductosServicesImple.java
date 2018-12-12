package com.victoria.tienda.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.victoria.tienda.entity.dao.ProductosdeDao;
import com.victoria.tienda.entity.models.Productos;

@Service
public class ProductosServicesImple implements ProductosServices {

	@Autowired
	private ProductosdeDao productosDao;
	
	
	
	@Override
	public Productos get(long id) {
		
		return productosDao.findById(id).get();
	}
	
	@Override
	public Productos get(String categoria) {
		
		return productosDao.findByCategoria(categoria);
	}

	@Override
	public List<Productos> getAll() {
		return (List<Productos>) productosDao.findAll();
	}
	
	

	@Override
	public void post(Productos tienda_productos) {
		productosDao.save(tienda_productos);
	}

	@Override
	public void put(Productos tienda_productos, long id) {
		productosDao.findById(id).ifPresent((x)->{
			tienda_productos.setId(id);
			productosDao.save(tienda_productos);
		});
	}

	@Override
	public void delete(long id) {
		productosDao.deleteById(id);
	}
}
