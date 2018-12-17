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

import com.victoria.tienda.entity.models.Moviles;
import com.victoria.tienda.entity.services.MovilesServices;

@CrossOrigin(origins={"*","http://localhost:8080"})
@RestController

public class MovilesController {
	
	@Autowired
	private MovilesServices movilesServices;
	
	@GetMapping("/tienda_moviles")
	public List<Moviles> getAllTienda(){
		return movilesServices.getAll();
	}
	
	
	@GetMapping("/tienda_moviles/{id}")
	public Moviles getOne(@PathVariable(value="id") long id) {
		return movilesServices.get(id);
	}
	
	@PostMapping("/tienda_moviles")
	public void add(Moviles tienda_moviles) {
		movilesServices.post(tienda_moviles);
	}
	
	@PutMapping("/tienda_moviles/{id}")
	public void update(Moviles tienda_moviles,@PathVariable(value="id") long id) {
		movilesServices.put(tienda_moviles,id);
	}
	
	@DeleteMapping("/tienda_moviles/{id}")
	public void delete(@PathVariable(value="id") long id) {
		movilesServices.delete(id);
	}

}
