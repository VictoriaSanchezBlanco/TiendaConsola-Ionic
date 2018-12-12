package com.victoria.tienda.controller;

//import java.io.FileNotFoundException;
//import java.io.FileOutputStream;
//import java.io.IOException;
//import java.io.OutputStream;
//import java.util.Base64;
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
	private ProductosServices tiendaServices;
	
	@GetMapping("/tienda_productos")
	public List<Productos> getAllTienda(){
		return tiendaServices.getAll();
	}
	

	@GetMapping("/tienda_productos/categoria/{categoria}")
	public List<Productos> getAllTienda2(){
		return tiendaServices.getAll();
	}
	
	@GetMapping("/tienda_productos/{id}")
	public Productos getOne(@PathVariable(value="id") long id) {
		return tiendaServices.get(id);
	}
	
	/*@GetMapping("/tienda_productosImg/{id}")
	public byte[] getOneImage(@PathVariable(value="id") long id) {
	    Productos prod = tiendaServices.get(id);
		
		writeImageFile(prod.getImage());
		
		return prod.getImage();
	}

	
	void writeImageFile(byte[] bytes){

			byte[] data = Base64.getDecoder().decode(bytes);
			try (OutputStream stream = new FileOutputStream("otrapruebita.jpg")) {
			    stream.write(data);
			} catch (FileNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	}*/
	
	@PostMapping("/tienda_productos")
	public void add(Productos tienda_productos) {
		tiendaServices.post(tienda_productos);
	}
	
	@PutMapping("/tienda_productos/{id}")
	public void update(Productos tienda_productos,@PathVariable(value="id") long id) {
		tiendaServices.put(tienda_productos,id);
	}
	
	@DeleteMapping("/tienda_productos/{id}")
	public void delete(@PathVariable(value="id") long id) {
		tiendaServices.delete(id);
	}
}
