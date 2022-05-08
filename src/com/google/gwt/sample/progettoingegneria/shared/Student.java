package com.google.gwt.sample.progettoingegneria.shared;

public class Student extends User{

	private static final long serialVersionUID = 4192379456341403664L;

	public Student(){
	}
	
	public Student(
			String userName, 
			String password, 
			String email, 
			String name, 
			String surname) {
		super(userName, password, email, name, surname);
	}

}
