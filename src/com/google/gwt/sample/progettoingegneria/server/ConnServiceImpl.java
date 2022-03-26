package com.google.gwt.sample.progettoingegneria.server;
import com.google.gwt.sample.progettoingegneria.client.ConnService;
import com.google.gwt.sample.progettoingegneria.server.Databases.CoursesDB;
import com.google.gwt.sample.progettoingegneria.server.Databases.UserDB;
import com.google.gwt.sample.progettoingegneria.shared.Course;
import com.google.gwt.user.server.rpc.RemoteServiceServlet;

public class ConnServiceImpl extends RemoteServiceServlet implements ConnService {
	private static final long serialVersionUID = 4192379456341403664L;

	@Override
	public String testCall(String input) {
		return "ho ricevuto "+ input;
	}
	
	@Override
	public Integer loginRequest(String user, String passw) {
		return UserDB.login(user, passw);
	}

	@Override
	public boolean addCourse(Course c) {
		return CoursesDB.addCourse(c);
		
	}


}
