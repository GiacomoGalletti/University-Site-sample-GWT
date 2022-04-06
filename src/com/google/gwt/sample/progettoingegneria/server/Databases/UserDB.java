package com.google.gwt.sample.progettoingegneria.server.Databases;

import java.io.File;
import java.util.Set;
import java.util.Map.Entry;
import org.mapdb.BTreeMap;
import org.mapdb.DB;
import org.mapdb.DBMaker;
import com.google.gwt.sample.progettoingegneria.shared.Admin;
import com.google.gwt.sample.progettoingegneria.shared.Course;
import com.google.gwt.sample.progettoingegneria.shared.Professor;
import com.google.gwt.sample.progettoingegneria.shared.Secretary;
import com.google.gwt.sample.progettoingegneria.shared.State;
import com.google.gwt.sample.progettoingegneria.shared.Student;
import com.google.gwt.sample.progettoingegneria.shared.User;

public class UserDB {

	private static DB getUserDB() {
		DB db = DBMaker.newFileDB(new File("dbProgettoIng3")).make();		
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

		String result = "";
		Set<String> keysU = userMap.keySet(); 

		for (String key : keysU) {
			User user = userMap.get(key);
			if(user.getClass() == Student.class)
				result = result + 
				"Email: " + user.getEmail() +
				" Nome: " + user.getName() +
				" Cognome: " + user.getSurname() +
				"  Username: " + user.getUserName() +
				" Password: " + user.getPw()
				+ "_";
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
			User user = userMap.get(key);
			if(user.getClass() == Professor.class)
				
				result = result + 
				"Email: " + user.getEmail() +
				" Nome: " + user.getName() +
				" Cognome: " + user.getSurname() +
				"  Username: " + user.getUserName() +
				" Password: " + user.getPw()
				+ "_";
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
		return "UsersDB";
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
		BTreeMap<String, User> userMap = db.getTreeMap("userMap");

		User u = userMap.get(email);

		String info = "Username :" + u.getUserName() + "\nEmail : " + email + 
				"\nNome : " + u.getName() + "\nCognome : " + u.getSurname();

		return info;
	}

	public static User getUser(String email) {
		DB db = getUserDB();
		BTreeMap<String, User> userMap = db.getTreeMap("userMap");
		return userMap.get(email);
	}
	
	public static boolean setUserInfo(String email, String newEmail, String name , String surname, String userName, String password)
	{
		
		DB db = getUserDB();
		User user = getUser(email);
		
		if (!newEmail.equals(user.getEmail())) {
			user.setEmail(email);
		}
		user.setName(name);
		user.setSurname(surname);
		user.setUserName(userName);
		user.setPassword(password);
		replaceUser(email,user);	
		db.commit();
		db.close();
		return true;
	}
	
	private static void replaceUser(String oldItemKey, User newItem) {
		DB db = getUserDB();
		BTreeMap<String, User> userMap = db.getTreeMap("userMap");
		userMap.replace(oldItemKey, newItem);
		db.commit();
		db.close();
	}

}

