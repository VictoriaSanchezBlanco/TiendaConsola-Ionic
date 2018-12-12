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

import com.victoria.tienda.entity.models.Proveedores;
import com.victoria.tienda.entity.services.ProveedoresServices;


@CrossOrigin(origins={"*","http://localhost:8080"})
@RestController

public class ProveedoresController {

	@Autowired
	private ProveedoresServices proveedoresServices;
	
	@GetMapping("/tienda_proveedores")
	public List<Proveedores> getAllTienda(){
		return proveedoresServices.getAll();
	}
	
	@GetMapping("/tienda_proveedores/{id}")
	public Proveedores getOne(@PathVariable(value="id") long id) {
		return proveedoresServices.get(id);
	}
	
	@PostMapping("/tienda_proveedores")
	public void add(Proveedores tienda_proveedores) {
		proveedoresServices.post(tienda_proveedores);
	}
	
	@PutMapping("/tienda_proveedores/{id}")
	public void update(Proveedores tienda_proveedores,@PathVariable(value="id") long id) {
		proveedoresServices.put(tienda_proveedores,id);
	}
	
	@DeleteMapping("/tienda_proveedores/{id}")
	public void delete(@PathVariable(value="id") long id) {
		proveedoresServices.delete(id);
	}
}
