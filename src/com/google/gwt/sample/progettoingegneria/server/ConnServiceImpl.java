package com.google.gwt.sample.progettoingegneria.server;

import com.google.gwt.sample.progettoingegneria.client.ConnService;
import com.google.gwt.sample.progettoingegneria.server.Databases.CoursesDB;
import com.google.gwt.sample.progettoingegneria.server.Databases.UserDB;
import com.google.gwt.sample.progettoingegneria.shared.Course;
import com.google.gwt.sample.progettoingegneria.shared.State;
import com.google.gwt.sample.progettoingegneria.shared.utilities.FirstUtility;
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
	public boolean addCourse(String name, String startDate, String endDate, String email) {
		Course c = new Course(name,startDate,endDate, FirstUtility.generateID(), email);
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
		try {
			return "Puliti: " + UserDB.clearDB() + " " +CoursesDB.clearDB();
		} finally {
			UserDB.rootUserInit();
		}		
	}

	@Override
	public String viewCoursesInfo(String email) {
		return CoursesDB.getCoursesList(email);
	}

	@Override
	public String getCourseData(String name) {
		return CoursesDB.getCourseData(name);
	}

	@Override
	public boolean setCourseData(String name, String newData, int type) {
		return CoursesDB.setCourseData(name, newData,type);
	}

	@Override
	public boolean deleteCourse(String name) {
		return CoursesDB.deleteCourse(name);
	}
	
}
