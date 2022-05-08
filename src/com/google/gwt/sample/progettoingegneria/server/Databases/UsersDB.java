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
import com.google.gwt.sample.progettoingegneria.shared.UserState;
import com.google.gwt.sample.progettoingegneria.shared.Student;
import com.google.gwt.sample.progettoingegneria.shared.User;
import com.google.gwt.sample.progettoingegneria.shared.UserFactory;

public class UsersDB
{

	private synchronized static DB getUserDB()
	{
		DB db = DBMaker.newFileDB(new File("dbProgettoIng3")).make();		
		return db;	
	}
	
	public static void rootUserInit()
	{
		DB db = getUserDB();
		BTreeMap<String, User> userMap = db.getTreeMap("userMap");
		
		User ad = new Admin("root", "root", "root@root", "root", "root");
		
		User prof1 = new Professor("prof.Flammea", "flammea", "profFlammea@prof", "Mario", "Flammea");
		User prof2 = new Professor("prof.Burrasca", "burrasca", "profBurrasca@prof", "Gian", "Burrasca");
		User prof3 = new Professor("prof.Wu", "wu", "profWu@prof", "Alessia", "Wu");
		
		User stu1 = new Student("MattiaF", "mattia", "mattia@stu", "Mattia", "Frega");
		User stu2 = new Student("FrancescoG", "francesco", "francesco@stu", "Francesco", "Guerrini");
		User stu3 = new Student("GiacomoG", "giacomo", "giacomo@stu", "Giacomo", "Galletti");
		
		User segr = new Secretary("segr", "segr", "segr@segr", "segr", "segr");
		
		userMap.putIfAbsent(ad.getEmail(),ad);
		userMap.putIfAbsent(prof1.getEmail(),prof1);
		userMap.putIfAbsent(prof2.getEmail(),prof2);
		userMap.putIfAbsent(prof3.getEmail(),prof3);
		userMap.putIfAbsent(stu1.getEmail(),stu1);
		userMap.putIfAbsent(stu2.getEmail(),stu2);
		userMap.putIfAbsent(stu3.getEmail(),stu3);
		userMap.putIfAbsent(segr.getEmail(),segr);
		db.commit();
		db.close();
	}

	public static String signUp(String username, String password, String email, String name, String surname, int type)
	{

		if (!checkMailExist(email)) {
			DB db = getUserDB();
			BTreeMap<String, User> userMap = db.getTreeMap("userMap");			
			userMap.put(email, new UserFactory().generateUser(type, username, password, email, name, surname));
			db.commit();
			db.close();
			return "registrato "+ userMap.get(email).getEmail() ;
		}
		return email + " esiste già.";
		
	}
	
	public static String viewStudentInfo()
	{
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
				" Username: "+ user.getSurname() + 
				" Password: "+ user.getPw()
				+ "_";
		}
		db.commit();
		db.close();
		return result;
	}
	
	public static String viewProfessorInfo()
	{
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
				" Username: "+ user.getSurname() + 
				" Password: "+ user.getPw()
				+ "_";
		}
		db.commit();
		db.close();
		return result;
	}
	
	public static String clearDB()
	{
		DB db = getUserDB();
		BTreeMap<String, User> userMap = db.getTreeMap("userMap");
		userMap.clear();
		db.commit();
		db.close();
		return "UsersDB";
	}

	public static boolean checkMailExist(String email)
	{
		DB db = getUserDB();
		BTreeMap<String, User> userMap = db.getTreeMap("userMap");
		
		for (Entry<String, User> entry : userMap.entrySet()) {
			if(entry.getValue().getEmail().equals(email)) {
				db.commit();
				db.close();
				return true;
			}
		}
		db.commit();
		db.close();
		return false;
	}
	
	public static UserState login(String email, String password)
	{
		DB db = getUserDB();
		BTreeMap<String, User> userMap = db.getTreeMap("userMap");

		if (checkMailExist(email)) {
			User u = userMap.get(email);
			if (u.getPw().equals(password)) {
				if (u.getClass() == Student.class) {
					return UserState.STUDENT;
				}
				if (u.getClass() == Professor.class) {
					return UserState.PROFESSOR;
				}
				if (u.getClass() == Secretary.class) {
					return UserState.SECRETARY;
				}
				if (u.getClass() == Admin.class) {
					return UserState.ADMIN;
				}	
			}
			
			return UserState.WRONG_PASSWORD; //password errata
		}
		return UserState.NOT_SIGNED; // account non presente nel db
	}

	public  static String getInfoUser(String email)
	{
		DB db = getUserDB();
		BTreeMap<String, User> userMap = db.getTreeMap("userMap");

		User u = userMap.get(email);

		String info = "Username :" + u.getUserName() + "\nEmail : " + email + 
				"\nNome : " + u.getName() + "\nCognome : " + u.getSurname();

		return info;
	}

	public static User getUser(String email)
	{
		DB db = getUserDB();
		BTreeMap<String, User> userMap = db.getTreeMap("userMap");
		return userMap.get(email);
	}
	
	public static boolean setUserInfo(String email,String name , String surname, String userName, String password)
	{
		DB db = getUserDB();
		User user = getUser(email);
		user.setName(name);
		user.setSurname(surname);
		user.setUserName(userName);
		user.setPassword(password);
		replaceUser(email,user);	
		db.commit();
		db.close();
		return true;
	}
	
	private static void replaceUser(String oldItemKey, User newItem)
	{
		DB db = getUserDB();
		BTreeMap<String, User> userMap = db.getTreeMap("userMap");
		userMap.replace(oldItemKey, newItem);
		db.commit();
		db.close();
	}

	public static String retrieveInfoStudentList()
	{
		DB db = getUserDB();
		BTreeMap<String, User> userMap = db.getTreeMap("userMap");
		
		String result = "";
		
		Set<String> keysU = userMap.keySet(); 

		for (String key : keysU) {
			User u = userMap.get(key);
			if( u instanceof Student) {
				result = result+ "Username :" + u.getUserName() +
						"\nEmail : " + u.getEmail() + 
						"\nNome : " + u.getName() +
					    "\nCognome : " + u.getSurname();
			}
		}
		db.commit();
		db.close();
		return result;
	}
	
	private static boolean deleteUser(User u)
	{
		DB db = getUserDB();
		BTreeMap<String, User> userMap = db.getTreeMap("userMap");
		
		userMap.remove(u.getEmail());
		db.commit();
		db.close();
		return true;
	}
	
	public static boolean deleteUserByEmail(String email)
	{
		return deleteUser(getUser(email));
	}

}

