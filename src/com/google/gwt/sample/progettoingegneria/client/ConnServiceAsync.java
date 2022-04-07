package com.google.gwt.sample.progettoingegneria.client;

import java.util.ArrayList;

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
	
	void viewCoursesInfo(AsyncCallback<String> callback);
	
	void viewCoursesInfo(String email,AsyncCallback<String> callback);
	
	void getCourseData(String name,AsyncCallback<String> callback);

	void setCourseData(String name, String startData, String endData, String newName, AsyncCallback<Boolean> callback);
	
	void deleteCourse(String name, AsyncCallback<Boolean> callback);
	
	void addExam(String name, String date, String prof, ArrayList<String> students , AsyncCallback<String> callback);
	
	void retrieveExams(String profName, AsyncCallback<ArrayList<String>> callback);
	
	void retrieveStudents(String selectedExam, AsyncCallback<ArrayList<String>> callback);
	
	void setUserInfo(String email, String newEmail, String name , String surname, String userName, String password, AsyncCallback<Boolean> callback);

	void getAvailableExams(AsyncCallback<String> callback);

	void registerStudentInExam(String selectedExam, String selectedStudent, AsyncCallback<Boolean> callback);
}
