package com.google.gwt.sample.progettoingegneria.client;

import java.util.ArrayList;

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
	
	String getInfoUser(String userEmail);
	
	String clearDB();
	
	String viewSudentCoursesInfo(String studentEmail);
	
	String viewProfessorCoursesInfo(String email);
	
	String getCourseData(String name);
	
	boolean setCourseData(String name, String startData,String endData, String newName);
	
	boolean deleteCourse(String name);
	
	String addExam(String name, String date, String hour, String prof, String classroom, String duration, ArrayList<String> students);
	
	ArrayList<String> retrieveExams(String profName);
	
	ArrayList<String> retrieveStudents(String selectedExam);
	
	boolean setUserInfo(String email, String newEmail, String name , String surname, String userName, String password);
	
	String getAvailableExams(String studentEmail, String courseName);
	
	boolean registerStudentInExam(String selectedExam, String selectedStudent);;
	
	String retrieveInfoStudentList();
	
	boolean sendGrades(String selectedExam, String[] studentsList, String[] gradesList);
	
	String getGrades(String email);

	String retrieveAviableCourses(String email);
	
	boolean courseRegistration(String emailStudente, String courseName);

	String retrieveSubscribedCourses(String studentEmail);

	String getStudentsCourseList(String courseName);
	
	String getStudentsExamList(String courseName);
	
	ArrayList<String> retrieveExamsForSecretary();
	
	String retrieveGradesAndStudents(String selectedExam);
	
	String getExamData(String name);
	
	boolean setExamData(String courseName, String date , String hour, String classroom, String duration);
	
	boolean deleteExam(String courseName);
	
	boolean publishGrades(String examName);
	
	String retrieveSubscribedExams(String studentEmail);

}
