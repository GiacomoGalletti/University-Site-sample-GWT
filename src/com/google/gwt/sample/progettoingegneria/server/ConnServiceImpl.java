package com.google.gwt.sample.progettoingegneria.server;

import java.util.ArrayList;
import com.google.gwt.sample.progettoingegneria.client.ConnService;
import com.google.gwt.sample.progettoingegneria.server.Databases.CoursesDB;
import com.google.gwt.sample.progettoingegneria.server.Databases.ExamsDB;
import com.google.gwt.sample.progettoingegneria.server.Databases.GradesDB;
import com.google.gwt.sample.progettoingegneria.server.Databases.UsersDB;
import com.google.gwt.sample.progettoingegneria.shared.Course;
import com.google.gwt.sample.progettoingegneria.shared.UserState;
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
	public UserState loginRequest(String user, String passw) {
		return UsersDB.login(user, passw);
	}

	@Override
	public boolean addCourse(String name, String startDate, String endDate, String email) {
		Course c = new Course(name,startDate,endDate, FirstUtility.generateID(), email);
		return CoursesDB.addCourse(c);	
	}

	@Override
	public String signUp(String username, String password, String email, String name, String surname, int type) {
		return UsersDB.signUp(username, password, email, name, surname, type);
	}

	@Override
	public String viewStudentInfo() {
		return UsersDB.viewStudentInfo();
	}
	
	@Override
	public String viewProfessorInfo() {
		return UsersDB.viewProfessorInfo();
	}
	
	@Override
	public String getInfoUser(String userEmail) {
		return UsersDB.getInfoUser(userEmail);
	} 
	
	public String clearDB() {
		try {
			return "Puliti: " + UsersDB.clearDB() + " " + CoursesDB.clearDB()+ " " + ExamsDB.clearDB() + " " + GradesDB.clearDB();
		} finally {
			UsersDB.rootUserInit();
		}		
	}

	@Override
	public String retrieveAviableCourses(String email) {
		return CoursesDB.retrieveAviableCourses(email);
	}
	
	@Override
	public String viewProfessorCoursesInfo(String professorEmail) {
		return CoursesDB.viewProfessorCoursesInfo(professorEmail);
	}
	
	@Override
	public String viewSudentCoursesInfo(String studentEmail) {
		return CoursesDB.viewSudentCoursesInfo(studentEmail);
	}

	@Override
	public String getCourseData(String name) {
		return CoursesDB.getCourseData(name);
	}

	@Override
	public boolean setCourseData(String name, String startData ,String endData, String newName) {
		return CoursesDB.setCourseData(name, startData,endData,newName);
	}

	@Override
	public boolean deleteCourse(String name) {
		return CoursesDB.deleteCourse(name);
	}
	
	@Override
	public String addExam(String courseName, String date, String hour, String prof, String classroom, String duration, ArrayList<String> students) {
		return ExamsDB.addExam(courseName, date, hour, prof, classroom, duration, students);
	}
	
	@Override
	public ArrayList<String> retrieveExams(String profName) {
		return ExamsDB.retrieveExams(profName);
	}
	
	@Override
	public boolean setUserInfo(String email, String newEmail, String name, String surname, String userName,
			String password) {
		return UsersDB.setUserInfo(email, newEmail, name, surname, userName, password);
	}
	
	@Override
	public String getAvailableExams(String studentEmail, String courseName) {
		return ExamsDB.getAvailableExams(studentEmail, courseName);
	}
	
	public boolean registerStudentInExam(String selectedExam, String selectedStudent) {
		return ExamsDB.registerStudentInExam(selectedExam, selectedStudent);
	}

	@Override
	public String retrieveInfoStudentList() {
		return UsersDB.retrieveInfoStudentList();
	}

	@Override
	public boolean sendGrades(String selectedExam, String[] studentsList, String[] gradesList) {
		return GradesDB.addGrades(selectedExam, studentsList, gradesList);
	}

	@Override
	public String getGrades(String email) {
		return GradesDB.getGrades(email);
	}

	@Override
	public boolean courseRegistration(String studentEmail, String courseName) {
		return CoursesDB.courseRegistration(studentEmail, courseName);
	}
	
	@Override
	public String retrieveSubscribedCourses(String studentEmail) {
		return CoursesDB.retrieveSubscribedCourses(studentEmail);
	}
	
	@Override
	public String getStudentsCourseList(String courseName) {
		return CoursesDB.getStudentsCourseList(courseName);
	}
	
	@Override
	public String getStudentsExamList(String examName) {
		return ExamsDB.getStudentsExamList(examName);
	}

	@Override
	public ArrayList<String> retrieveExamsForSecretary() {
		return ExamsDB.retrieveExamsForSecretary();
	}

	@Override
	public String getExamData(String name) {
		return ExamsDB.getExamData(name);
	}

	@Override
	public boolean setExamData(String courseName, String date, String hour, String classroom, String duration) {
		return ExamsDB.setExamData(courseName, date, hour, classroom, duration);
	}

	@Override
	public boolean deleteExam(String courseName) {
		return ExamsDB.deleteExam(courseName);
	}

	@Override
	public ArrayList<String> retrieveStudents(String selectedExam) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String retrieveGradesAndStudents(String selectedExam) {
		return GradesDB.retrieveGradesAndStudents(selectedExam);
	}

	@Override
	public boolean publishGrades(String examName) {
		return GradesDB.publishGrades(examName);
	}

	@Override
	public String retrieveSubscribedExams(String studentEmail) {
		return ExamsDB.retrieveSubscribedExams(studentEmail);
		
	}
}
