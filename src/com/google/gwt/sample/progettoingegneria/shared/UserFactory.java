package com.google.gwt.sample.progettoingegneria.shared;

public class UserFactory {

	public User generateUser(int userType,String username,String password,String email,String name,String surname) {
		switch (userType) {
			case 0:
				User s = new Student(username, password, email, name, surname);
				return s;
			case 1:
				User p = new Professor(username, password, email, name, surname);
				return p;
			case 2:
				User se = new Secretary(username, password, email, name, surname);
				return se;
			default:
				return null;
		}
	} 
}
