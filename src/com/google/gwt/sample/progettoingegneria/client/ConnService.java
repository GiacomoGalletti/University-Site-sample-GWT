package com.google.gwt.sample.progettoingegneria.client;

import com.google.gwt.sample.progettoingegneria.shared.State;
import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;

@RemoteServiceRelativePath("stockPrices")
public interface ConnService extends RemoteService {	
	
	String testCall(String input);
	
	State loginRequest(String user, String passw);
	
	public boolean addCourse(String name, String startDate, String endDate);
	
	String signUp(String username, String password, String email, String name, String surname, int type);

	String viewStudentInfo();
	
	String viewProfessorInfo();
	
	String clearDB();
}
