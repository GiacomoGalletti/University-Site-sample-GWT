package com.google.gwt.sample.progettoingegneria.shared;

import java.io.Serializable;
import java.util.ArrayList;

public class Course implements Serializable{

	private static final long serialVersionUID = 1L; 
	private String name;
	private String startDate;
	private String endDate;
	private String emailProfessor;
	private String id = "";
	private ArrayList<String> studentsEmail;
	
	public Course() {}
	
	public Course(String name,String startingDate, String endDate, String id, String emailProfessor) 
	{
		this.name = name;
		this.startDate = startingDate;
		this.endDate = endDate;
		this.id = id;
		this.emailProfessor = emailProfessor;
		this.studentsEmail = new ArrayList<String>();
	}
	
	public String getName()
	{	
		return this.name;
	}
	
	public String getStartingDate()
	{
		return this.startDate;
	}
	
	public String getEndDate() 
	{
		return this.endDate;
	}

	public String getId() {
		return id;
	}
	
	public String getEmailProfessor() {
		return emailProfessor;
	}
	
	public void setName(String name) {
		this.name = name;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public void setEmailProfessor(String emailProfessor) {
		this.emailProfessor = emailProfessor;
	}
	
	public ArrayList<String> getStudentsEmail() {
		return this.studentsEmail;
	}

	public void addStudentEmail(String selectedStudent) {
		this.studentsEmail.add(selectedStudent);
		
	}

}
