package com.victoria.tienda.entity.services;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.victoria.tienda.entity.dao.MovilesdeDao;
import com.victoria.tienda.entity.models.Moviles;

@Service
public class MovilesServicesImple implements MovilesServices{
	
	@Autowired
	private MovilesdeDao movilesDao;
	
	
	
	@Override
	public Moviles get(long id) {
		return movilesDao.findById(id).get();
	}
	
	@Override
	public List<Moviles> getAll() {
		return (List<Moviles>) movilesDao.findAll();
	}
	
	@Override
	public void post(Moviles tienda_moviles) {
		movilesDao.save(tienda_moviles);
	}

	@Override
	public void put(Moviles tienda_moviles, long id) {
		movilesDao.findById(id).ifPresent((x)->{
			tienda_moviles.setId(id);
			movilesDao.save(tienda_moviles);
		});
	}

	@Override
	public void delete(long id) {
		movilesDao.deleteById(id);
	}

}
