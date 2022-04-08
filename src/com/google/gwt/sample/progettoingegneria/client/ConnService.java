package com.google.gwt.sample.progettoingegneria.client;

import java.util.ArrayList;

import com.google.gwt.sample.progettoingegneria.shared.GradeState;
import com.google.gwt.sample.progettoingegneria.shared.UserState;
import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;

@RemoteServiceRelativePath("stockPrices")
public interface ConnService extends RemoteService {	
	
	String testCall(String input);
	
	UserState loginRequest(String user, String passw);
	
	boolean addCourse(String name, String startDate, String endDate, String email);
	
	String signUp(String username, String password, String email, String name, String surname, int type);

	String viewStudentInfo();
	
	String viewProfessorInfo();
	
	String clearDB();
	
	String viewCoursesInfo();
	
	String viewCoursesInfo(String email);
	
	String getCourseData(String name);
	
	boolean setCourseData(String name, String startData,String endData, String newName);
	
	boolean deleteCourse(String name);
	
	String addExam(String name, String date, String prof, String classroom, String duration, ArrayList<String> students);
	
	ArrayList<String> retrieveExams(String profName);
	
	ArrayList<String> retrieveStudents(String selectedExam);
	
	boolean setUserInfo(String email, String newEmail, String name , String surname, String userName, String password);
	
	String getAvailableExams();
	
	boolean registerStudentInExam(String selectedExam, String selectedStudent);
	
	String retrieveInfoStudentList();
	
	boolean sendGrades(String selectedExam, String[] studentsList, String[] gradesList);
	
	String getGrades(String email);
}
