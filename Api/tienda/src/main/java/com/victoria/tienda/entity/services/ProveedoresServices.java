package com.victoria.tienda.entity.services;

import java.util.List;

import com.victoria.tienda.entity.models.Proveedores;

public interface ProveedoresServices {
	
	public Proveedores get(long id);
	public List<Proveedores>getAll();
	public void post(Proveedores tienda_proveedores);
	public void put(Proveedores tienda_proveedores, long id);
	public void delete(long id);

}
