package com.victoria.tienda.entity.models;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.FetchType;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins= {"http://localhost:8080","*"})
@Entity
@Table(name = "tienda_usuarios")

public class Usuario implements Serializable{

private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotEmpty
	private String name;
	
	@NotEmpty
	private String nif;
	
	@NotEmpty
	private String direccion;
	
	@NotEmpty
	private String sexo;
	
	@NotEmpty
	private String email;
	
	@NotEmpty
	private String comentario;
	
	@NotNull
	private Integer telefono;
	
	@NotNull
	private Integer movil;
	
	@NotEmpty
	@Column(length = 30, unique = true)
	private String username;
	
	@Column(length = 60)
	private String password;
	
	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id")
	private List<Role> roles;
	
	@ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                CascadeType.PERSIST,
                CascadeType.MERGE
            })
    @JoinTable(name = "tienda_productos_tienda_usuarios_rel",
            joinColumns = { @JoinColumn(name = "tienda_usuarios_id") },
            inverseJoinColumns = { @JoinColumn(name = "tienda_productos_id") })
    private Set<Productos> productos = new HashSet<>();
	
	
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
	public String getNif() {
		return nif;
	}
	public void setNif(String nif) {
		this.nif = nif;
	}
	public String getDireccion() {
		return direccion;
	}
	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getComentario() {
		return comentario;
	}
	public void setComentario(String comentario) {
		this.comentario = comentario;
	}
	public Integer getTelefono() {
		return telefono;
	}
	public void setTelefono(Integer telefono) {
		this.telefono = telefono;
	}
	public Integer getMovil() {
		return movil;
	}
	public void setMovil(Integer movil) {
		this.movil = movil;
	}

	public String getSexo() {
		return sexo;
	}
	public void setSexo(String sexo) {
		this.sexo = sexo;
	}
	
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<Role> getRoles() {
		return roles;
	}

	public void setRoles(List<Role> roles) {
		this.roles = roles;
	}
	
	public Set<Productos> getProductos() {
		return productos;
	}
	public void setProductos(Set<Productos> productos) {
		this.productos = productos;
	}
	
	public Usuario(long id, @NotEmpty String name, @NotEmpty String nif, @NotEmpty String direccion,
			@NotEmpty String sexo, @NotEmpty String email, @NotEmpty String comentario, @NotNull Integer telefono,
			@NotNull Integer movil,@NotEmpty String username,@NotEmpty String password) {
		super();
		this.id = id;
		this.name = name;
		this.nif = nif;
		this.direccion = direccion;
		this.sexo = sexo;
		this.email = email;
		this.comentario = comentario;
		this.telefono = telefono;
		this.movil = movil;
		this.username = username;
		this.password = password;
	}
	public Usuario() {
		
	}
	
	
	
	
}
