package com.google.gwt.sample.progettoingegneria.server;

import com.google.gwt.sample.progettoingegneria.client.ConnService;
import com.google.gwt.sample.progettoingegneria.server.Databases.CoursesDB;
import com.google.gwt.sample.progettoingegneria.server.Databases.UserDB;
import com.google.gwt.sample.progettoingegneria.shared.Course;
import com.google.gwt.sample.progettoingegneria.shared.State;
import com.google.gwt.user.server.rpc.RemoteServiceServlet;

public class ConnServiceImpl extends RemoteServiceServlet implements ConnService {

	private static final long serialVersionUID = 4192379456341403664L;

	@Override
	public String testCall(String input) {
		//UserDB.rootUserInit();
		return "ho ricevuto "+ input;
	}
	
	@Override
	public State loginRequest(String user, String passw) {
		return UserDB.login(user, passw);
	}

	@Override
	public boolean addCourse(Course c) {
		return CoursesDB.addCourse(c);	
	}

	@Override
	public String signUp(String username, String password, String email, String name, String surname, int type) {
		return UserDB.signUp(username, password, email, name, surname, type);
	}

	@Override
	public String viewStudentInfo() {
		return UserDB.viewStudentInfo();
	}
	
	@Override
	public String viewProfessorInfo() {
		return UserDB.viewProfessorInfo();
	}
	
	public String clearDB() {
		//clear anche degli altri DB
		try {
			return UserDB.clearDB();
		} finally {
			UserDB.rootUserInit();
		}
		
	}

	
	
	

}
