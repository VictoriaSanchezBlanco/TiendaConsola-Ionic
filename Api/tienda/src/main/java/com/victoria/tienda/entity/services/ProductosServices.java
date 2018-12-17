package com.victoria.tienda.entity.services;

import java.util.List;
import com.victoria.tienda.entity.models.Productos;

public interface ProductosServices {

	public Productos get(long id);
	public List<Productos>getAll();
	public void post(Productos tienda_productos);
	public void put(Productos tienda_productos, long id);
	public void delete(long id);
}
