package com.google.gwt.sample.progettoingegneria.server.Databases;

import java.io.File;
import java.util.ArrayList;
import java.util.Set;
import java.util.Map.Entry;

import org.mapdb.BTreeMap;
import org.mapdb.DB;
import org.mapdb.DBMaker;

import com.google.gwt.sample.progettoingegneria.shared.Admin;
import com.google.gwt.sample.progettoingegneria.shared.Professor;
import com.google.gwt.sample.progettoingegneria.shared.Secretary;
import com.google.gwt.sample.progettoingegneria.shared.Student;
import com.google.gwt.sample.progettoingegneria.shared.User;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;

public class UserDB {

	private static DB getUserDB() {
		DB db = DBMaker.newFileDB(new File("dbProgettoIng")).make();		
		return db;	
	}

	public static String signUp(String username, String password, String email, String name, String surname, int type) {

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

	private static boolean userValidation(ArrayList<String> dati) {
		for (int i=0; i<3; i++) {
			if(dati.get(i).isEmpty()|| dati.get(i).trim().length() <= 0) {
				return false;
			}
		}
		return true;
	}

	public static int login(String email, String password) {

		DB db = getUserDB();
		BTreeMap<String, User> userMap = db.getTreeMap("userMap");
		Student st =  new Student("ro","ro","ro@ro","ro", "ro"); 
		Admin ad = new Admin("po","po","po@po","po", "po");
		userMap.put(st.getEmail(), st);
		userMap.put(ad.getEmail(), ad);
		User u = userMap.get(email);
		
		if(u.getPw().equals(password)) {
			return 1;
		}else {
			return 0;
		}
		
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

