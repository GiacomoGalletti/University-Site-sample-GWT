package com.google.gwt.sample.progettoingegneria.client;

import com.google.gwt.sample.progettoingegneria.shared.State;
import com.google.gwt.user.client.rpc.AsyncCallback;

public interface ConnServiceAsync {
	
	void testCall(String input, AsyncCallback<String> callback);
	
	void loginRequest(String user, String passw, AsyncCallback<State> asyncCallback);
	
	void addCourse(String name, String startDate, String endDate, String email, AsyncCallback<Boolean> callback);
	
	void signUp(String username, String password, String email, String name, String surname, int type,  AsyncCallback<String> callback);

	void viewStudentInfo(AsyncCallback<String> callback);
	
	void viewProfessorInfo(AsyncCallback<String> callback);

	void clearDB(AsyncCallback<String> callback);
	
	void viewCoursesInfo(String email,AsyncCallback<String> callback);
	
	void getCourseData(String name,AsyncCallback<String> callback);

	void setCourseData(String name, String newData, int type,AsyncCallback<Boolean> callback);
	
	void deleteCourse(String name, AsyncCallback<Boolean> callback);
}
