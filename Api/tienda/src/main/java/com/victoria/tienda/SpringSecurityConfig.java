package com.victoria.tienda;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.victoria.tienda.entity.services.JpaUserDetailsService;



@Configuration
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private JpaUserDetailsService userDetailsService;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
	    BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
	    return bCryptPasswordEncoder;
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable()
			.authorizeRequests()
			.antMatchers("/users").permitAll()
			.antMatchers("/tienda_usuarios").permitAll()
			.antMatchers("/tienda_usuarios/**").hasAnyRole("ADMIN")
			.antMatchers("/tienda_proveedores/**").permitAll()
			//.antMatchers("/tienda_proveedores/**").hasAnyRole("ADMIN")
			.antMatchers("/tienda_productos").permitAll()
			.antMatchers("/tienda_productos/**").permitAll()
			//.antMatchers("/tienda_productos/**").hasAnyRole("ADMIN")
			.antMatchers("/tienda_moviles").permitAll()
			.antMatchers("/tienda_moviles/**").hasAnyRole("ADMIN")

			//.antMatchers("/tienda_productos/**").hasAnyRole("ADMIN")
			.antMatchers("/tienda_regis/**").hasAnyRole("ADMIN")
			.anyRequest().authenticated()
			.and()
		    .httpBasic();
	}
	
	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception{	
		auth.userDetailsService(userDetailsService)
			.passwordEncoder(passwordEncoder);
	}

}
