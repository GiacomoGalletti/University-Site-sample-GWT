package com.google.gwt.sample.progettoingegneria;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import com.google.gwt.sample.progettoingegneria.server.Databases.UsersDB;

public class UsersDBTest {
	
	@Test
	void signUpTest() {
		
		UsersDB.signUp("usernameTest", "passwordTest", "email@test","nameTest", "surnameTest", 0);
	
		Assertions.assertTrue(UsersDB.checkMailExist("email@test"));
	}
}
