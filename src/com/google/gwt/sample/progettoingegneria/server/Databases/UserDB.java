package com.google.gwt.sample.progettoingegneria.server.Databases;

import java.io.File;
import java.util.Set;
import java.util.Map.Entry;

import org.mapdb.BTreeMap;
import org.mapdb.DB;
import org.mapdb.DBMaker;

import com.google.gwt.sample.progettoingegneria.shared.Admin;
import com.google.gwt.sample.progettoingegneria.shared.Professor;
import com.google.gwt.sample.progettoingegneria.shared.Secretary;
import com.google.gwt.sample.progettoingegneria.shared.State;
import com.google.gwt.sample.progettoingegneria.shared.Student;
import com.google.gwt.sample.progettoingegneria.shared.User;

public class UserDB {

	private static DB getUserDB() {
		DB db = DBMaker.newFileDB(new File("dbProgettoIng")).make();		
		return db;	
	}
	
	public static void rootUserInit() {
		DB db = getUserDB();
		BTreeMap<String, User> userMap = db.getTreeMap("userMap");
		User ad = new Admin("root", "root", "root@root", "root", "root");
		userMap.putIfAbsent(ad.getEmail(),ad);
		db.commit();
		db.close();
	}

	public static String signUp(String username, String password, String email, String name, String surname, int type) {

		// STATE Pattern (?)
		if (!checkMailExist(email)) {
			DB db = getUserDB();
			BTreeMap<String, User> userMap = db.getTreeMap("userMap");

			switch (type) {
			case 0:
				User s = new Student(username, password, email, name, surname);
				userMap.put(email, s);
				break;
			case 1:
				User p = new Professor(username, password, email, name, surname);
				userMap.put(email, p);
				break;
			case 2:
				User se = new Secretary(username, password, email, name, surname);
				userMap.put(email, se);
				break;
			}
			User r = userMap.get(email);
			db.commit();
			db.close();
			return "registrato "+ r.getEmail() ;
		}
		return email + " esiste già.";
		
	}
	
	public static String viewStudentInfo() {
		DB db = getUserDB();
		BTreeMap<String, User> userMap = db.getTreeMap("userMap");

		String result = " ";
		Set<String> keysU = userMap.keySet(); 

		for (String key : keysU) {
			if(userMap.get(key).getClass() == Student.class)
				
				result = result + 
				userMap.get(key).getEmail() + " " +
				userMap.get(key).getName() + " " +
				userMap.get(key).getSurname()
				+ "\n";
		}
		db.commit();
		db.close();
		return result;
	}
	
	public static String viewProfessorInfo() {
		DB db = getUserDB();
		BTreeMap<String, User> userMap = db.getTreeMap("userMap");

		String result = "";
		Set<String> keysU = userMap.keySet(); 

		for (String key : keysU) {
			if(userMap.get(key).getClass() == Professor.class)
				
				result = result + 
				userMap.get(key).getEmail() + " " +
				userMap.get(key).getName() + " " +
				userMap.get(key).getSurname()
				+ "\n";
		}
		db.commit();
		db.close();
		return result;
	}
	
	public static String clearDB() {
		DB db = getUserDB();
		BTreeMap<String, User> userMap = db.getTreeMap("userMap");
		userMap.clear();
		db.commit();
		db.close();
		return "pulito";
	}

	private static boolean checkMailExist(String email) {
		DB db = getUserDB();
		BTreeMap<String, User> userMap = db.getTreeMap("userMap");
		
		for (Entry<String, User> entry : userMap.entrySet()) {
			if(entry.getValue().getEmail().equalsIgnoreCase(email)) {
				return true;
			}
		}
		return false;
	}
	
	public static State login(String email, String password) {
		DB db = getUserDB();
		BTreeMap<String, User> userMap = db.getTreeMap("userMap");

		if (checkMailExist(email)) {
			User u = userMap.get(email);
			if (u.getPw().equals(password)) {
				if (u.getClass() == Student.class) {
					return State.STUDENT;
				}
				if (u.getClass() == Professor.class) {
					return State.PROFESSOR;
				}
				if (u.getClass() == Secretary.class) {
					return State.SECRETARY;
				}
				if (u.getClass() == Admin.class) {
					return State.ADMIN;
				}	
			}
			
			return State.WRONG_PASSWORD; //password errata
		}
		return State.NOT_SIGNED; // account non presente nel db
	}

	public static String getInfoUser(String email) {

		DB db = getUserDB();
		BTreeMap<String, User> UtentiMap = db.getTreeMap("userMap");

		User u = UtentiMap.get(email);

		String info = "Username :" + u.getUserName() + "\nEmail : " + email + 
				"\nNome : " + u.getName() + "\nCognome : " + u.getSurname();

		return info;
	}


	
	

}

