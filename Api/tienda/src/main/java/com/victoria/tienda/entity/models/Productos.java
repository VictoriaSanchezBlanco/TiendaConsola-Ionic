package com.victoria.tienda.entity.models;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
//import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

//import org.hibernate.annotations.Type;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins= {"http://localhost:8080","*"})
@Entity
@Table(name = "tienda_productos")


public class Productos implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotEmpty
	private String name;
	
	@NotEmpty	
	private String categoria;
	
	@NotEmpty
	private String descripcion;
	
	@NotNull
	private Double precio;
	
	@ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                CascadeType.PERSIST,
                CascadeType.MERGE
            }, mappedBy = "productos")
    private Set<Usuario> usuario = new HashSet<>();
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCategoria() {
		return categoria;
	}
	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public Double getPrecio() {
		return precio;
	}
	public void setPrecio(Double precio) {
		this.precio = precio;
	}
	
	
	public Productos(@NotEmpty long id,@NotEmpty String name,@NotEmpty String categoria,@NotEmpty String descripcion,@NotNull Double precio) {
		super();
		this.id = id;
		this.name = name;
		this.categoria = categoria;
		this.descripcion = descripcion;
		this.precio = precio;
	}
	
	public Productos() {
		
	}

}
