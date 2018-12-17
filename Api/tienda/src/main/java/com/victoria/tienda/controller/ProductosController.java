package com.victoria.tienda.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;


import com.victoria.tienda.entity.models.Productos;
import com.victoria.tienda.entity.services.ProductosServices;
@CrossOrigin(origins={"*","http://localhost:8080"})
@RestController

public class ProductosController {

	@Autowired
	private ProductosServices productosServices;
	
	@GetMapping("/tienda_productos")
	public List<Productos> getAllTienda(){
		return productosServices.getAll();
	}
	
	
	@GetMapping("/tienda_productos/{id}")
	public Productos getOne(@PathVariable(value="id") long id) {
		return productosServices.get(id);
	}
	
	@PostMapping("/tienda_productos")
	public void add(Productos tienda_productos) {
		productosServices.post(tienda_productos);
	}
	
	@PutMapping("/tienda_productos/{id}")
	public void update(Productos tienda_productos,@PathVariable(value="id") long id) {
		productosServices.put(tienda_productos,id);
	}
	
	@DeleteMapping("/tienda_productos/{id}")
	public void delete(@PathVariable(value="id") long id) {
		productosServices.delete(id);
	}
}
