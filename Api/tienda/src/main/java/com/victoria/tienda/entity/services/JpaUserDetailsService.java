package com.victoria.tienda.entity.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.victoria.tienda.entity.models.Role;
import com.victoria.tienda.entity.models.Usuario;
import com.victoria.tienda.entity.dao.IAppUserDao;


@Service("JpaUserDetailsService")
public class JpaUserDetailsService implements UserDetailsService{
	
	@Autowired
	IAppUserDao userDao;
	
	@Override
	@Transactional(readOnly=true)
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		Usuario usuario = userDao.findUserByUsername(username);
		
		if(usuario == null) {
			throw new UsernameNotFoundException("User " + username + " doesn't exist");
		}
		
		List<GrantedAuthority> authorities = new ArrayList<>();
		
		for(Role role: usuario.getRoles()) {
			authorities.add(new SimpleGrantedAuthority(role.getRole()));
		}
		
		if(authorities.isEmpty()) {
			throw new UsernameNotFoundException("User " + username + " doesn't have any assigned role");
		}
		
		return new User(usuario.getUsername(), usuario.getPassword(), true, true, true, true, authorities);
	}
}
