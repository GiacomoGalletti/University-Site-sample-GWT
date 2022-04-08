package com.google.gwt.sample.progettoingegneria.shared;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class Exam implements Serializable{
	// examName = [courseName + ',' + date]
	private static final long serialVersionUID = 1L; 
	private String examName;
	
	private String courseName;
	private String date;
	private String classroom;
	private String duration;
	private ArrayList<String> studentsEmail;
	private String profEmail;
	
	public Exam() {}
	
	public Exam (
			String courseName,
			String date,
			String profEmail, 
			String classroom,
			String duration,
			ArrayList<String> studentsEmail
			) {
		this.date = date;
		this.classroom = classroom;
		this.duration = duration;
		this.studentsEmail = studentsEmail;
		this.profEmail = profEmail;
		this.examName = courseName + "," + date;
	}
	
	public String getName() {
		return this.examName;
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

	public String getClassroom() {
		return this.classroom;
	}
	
	public String getDuration() {
		return this.duration;
	}
	
	public String getCourseName() {
		return this.courseName;
	}
}
