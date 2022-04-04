package com.google.gwt.sample.progettoingegneria.shared;

import java.io.Serializable;

public class User implements Serializable { 
	
	private static final long serialVersionUID = 4192379456341403664L;

	private String userName;
	private String password; 
	private String email;
	private String name;
	private String surname;

	public User()	{
		
	}
	
	public User(String userName, String password, String email, String name, String surname) {
		this.userName = userName;
		this.password = password;
		this.email = email;
		this.name = name;
		this.surname = surname;
	}


	public String getUserName(){
		return this.userName;
	}

	public String getPw(){
		return this.password;		
	}

	public String getEmail(){
		return this.email;		
	}

	public String getName(){
		return this.name;		
	}

	public String getSurname(){
		return this.surname;		
	}
}

