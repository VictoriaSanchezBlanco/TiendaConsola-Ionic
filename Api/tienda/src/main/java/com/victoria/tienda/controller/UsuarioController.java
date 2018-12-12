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

import com.victoria.tienda.entity.models.Usuario;
import com.victoria.tienda.entity.services.UsuarioServices;
@CrossOrigin(origins={"*","http://localhost:8080"})
@RestController

public class UsuarioController {

	@Autowired
	private UsuarioServices usuarioServices;
	
	@GetMapping("/tienda_usuarios")
	public List<Usuario> getAllTienda(){
		return usuarioServices.getAll();
	}
	
	@GetMapping("/tienda_usuarios/{id}")
	public Usuario getOne(@PathVariable(value="id") long id) {
		return usuarioServices.get(id);
	}
	
	@PostMapping("/tienda_usuarios")
	public void add(Usuario tienda_usuarios) {
		usuarioServices.post(tienda_usuarios);
	}
	
	@PutMapping("/tienda_usuarios/{id}")
	public void update(Usuario tienda_usuarios,@PathVariable(value="id") long id) {
		usuarioServices.put(tienda_usuarios,id);
	}
	
	@DeleteMapping("/tienda_usuarios/{id}")
	public void delete(@PathVariable(value="id") long id) {
		usuarioServices.delete(id);
	}
}
