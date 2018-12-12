package com.victoria.tienda.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.victoria.tienda.entity.dao.ProveedoresdeDao;
import com.victoria.tienda.entity.models.Proveedores;

@Service
public class ProveedoresServicesImple implements ProveedoresServices{
	
	@Autowired
	private ProveedoresdeDao proveedoresDao;

	@Override
	public Proveedores get(long id) {
		return proveedoresDao.findById(id).get();
	}

	@Override
	public List<Proveedores> getAll() {
		return (List<Proveedores>) proveedoresDao.findAll();
	}

	@Override
	public void post(Proveedores tienda_proveedores) {
		proveedoresDao.save(tienda_proveedores);
	}

	@Override
	public void put(Proveedores tienda_proveedores, long id) {
		proveedoresDao.findById(id).ifPresent((x)->{
			tienda_proveedores.setId(id);
			proveedoresDao.save(tienda_proveedores);
		});
	}

	@Override
	public void delete(long id) {
		proveedoresDao.deleteById(id);
	}

}
