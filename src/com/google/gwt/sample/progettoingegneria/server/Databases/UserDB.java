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

public class UserDB {

	private static DB getUserDB() {
		DB db = DBMaker.newFileDB(new File("dbProgettoIng")).make();		
		return db;	
	}
	
	public static void initAdmin() {

		DB db = getUserDB();
		BTreeMap<String, User> userMap = db.getTreeMap("UserMap");
		
		Admin a = new Admin("root", "root", "root@root.com", 
				"root", "root");

		userMap.put(a.getEmail(), a);
		db.commit();
		db.close();
	}

	public static String signUp(ArrayList<String> dati) {

		DB db = getUserDB();
		BTreeMap<String, User> userMap;

		if(userValidation(dati)) {
			if(!checkExists(dati.get(2))) {
				userMap = db.getTreeMap("userMap");

				User u = new User(
						dati.get(0),
						dati.get(1),
						dati.get(2),
						dati.get(3),
						dati.get(4)
						);

				userMap.put(u.getEmail(), u);
				db.commit();
				db.close();
				return "Registazione completata con successo";
			}
			else return "Indirizzo email gia' presente";
		}
		else return "Compilare tutti i campi";
	}

	private static boolean userValidation(ArrayList<String> dati) {
		for (int i=0; i<3; i++) {
			if(dati.get(i).isEmpty()|| dati.get(i).trim().length() <= 0) {
				return false;
			}
		}
		return true;
	}

	private static boolean checkExists(String email) {

		DB db = getUserDB();
		BTreeMap<String, User> userMap = db.getTreeMap("userMap");

		if (email.equalsIgnoreCase("admin@admin.com")) { 
			return true;
		} else {
			for (Entry<String, User> entry : userMap.entrySet()) {
				if(entry.getValue().getEmail().equalsIgnoreCase(email)) {
					// utente trovato
					return true;
				}
			}
		}
		// Utente non trovato 
		return false;
	}

	public static int login(String email, String password) throws IllegalArgumentException {

		DB db = getUserDB();
		BTreeMap<String, User> userMap = db.getTreeMap("userMap");

		if(checkExists(email)) {
			User u = userMap.get(email);

			if(u.getPw().equals(password)) {
				// Utente trovato e dati di inserimento corretti
				if((u.getClass() == Professor.class)) return  1;
				if((u.getClass() == Secretary.class)) return 2;
				if((u.getClass() == Student.class)) return 3;
			}
			else {
				return -1; //password errata
			}
		}
		return 0; // Utente non trovato

	}


	public static String getInfoUser(String email) {

		DB db = getUserDB();
		BTreeMap<String, User> UtentiMap = db.getTreeMap("UserMap");

		User u = UtentiMap.get(email);

		String info = "Username :" + u.getUserName() + "\nEmail : " + email + 
				"\nNome : " + u.getName() + "\nCognome : " + u.getSurname();

		return info;
	}

	public static ArrayList<String> getUserList() {

		DB db = getUserDB();
		BTreeMap<String, User> userMap = db.getTreeMap("userMap");

		ArrayList<String> users = new ArrayList<String>();
		Set<String> keysU = userMap.keySet(); 

		for (String key : keysU) {
			if(userMap.get(key).getClass() == User.class)
				users.add(userMap.get(key).getEmail());
		}

		return users;
	}

}

