package com.victoria.tienda.entity.services;

import java.util.List;

import com.victoria.tienda.entity.models.Moviles;

public interface MovilesServices {
	
	public Moviles get(long id);
	public List<Moviles>getAll();
	public void post(Moviles tienda_moviles);
	public void put(Moviles tienda_moviles, long id);
	public void delete(long id);

}
