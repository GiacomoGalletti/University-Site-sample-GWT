package com.google.gwt.sample.progettoingegneria.shared;

import java.io.Serializable;
import java.util.ArrayList;

public class Exam implements Serializable{
	private static final long serialVersionUID = 1L; 

	private ExamState state = ExamState.OPEN;
	private String courseName;
	private String date;
	private String hour;
	private String classroom;
	private String duration;
	private ArrayList<String> studentsEmail;
	private String profEmail;
	
	public Exam() {}
	
	public Exam (
			String courseName,
			String date,
			String hour,
			String profEmail, 
			String classroom,
			String duration,
			ArrayList<String> studentsEmail
			) {
		this.date = date;
		this.setHour(hour);
		this.classroom = classroom;
		this.duration = duration;
		this.studentsEmail = studentsEmail;
		this.profEmail = profEmail;
		this.courseName = courseName;
	}
	
	public String getDate() {
		return this.date;
	}

	public String getProfEmail() {
		return this.profEmail;
	}
	
	public ArrayList<String> getStudentsEmail() {
		return this.studentsEmail;
	}

	public void addStudentEmail(String selectedStudent) {
		this.studentsEmail.add(selectedStudent);
		
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public void setClassroom(String classroom) {
		this.classroom = classroom;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public void setStudentsEmail(ArrayList<String> studentsEmail) {
		this.studentsEmail = studentsEmail;
	}

	public void setProfEmail(String profEmail) {
		this.profEmail = profEmail;
	}

	public String getClassroom() {
		return this.classroom;
	}
	
	public String getDuration() {
		return this.duration;
	}
	
	public String getCourseName() {
		return this.courseName;
	}

	public String getHour() {
		return hour;
	}

	public void setHour(String hour) {
		this.hour = hour;
	}

	public ExamState getState() {
		return state;
	}

	public void setState(ExamState state) {
		this.state = state;
	}
}
