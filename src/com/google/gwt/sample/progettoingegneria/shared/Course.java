package com.google.gwt.sample.progettoingegneria.shared;

import java.io.Serializable;

public class Course implements Serializable{

	private static final long serialVersionUID = 1L; 
	private String Name;
	private String startingDate;
	private String endDate;
	private String emailProfessor;
	private String id = "";
	
	public Course() {}
	
	public Course(String name,String startingDate, String endDate, String id, String emailProfessor) 
	{
		this.Name = name;
		this.startingDate = startingDate;
		this.endDate = endDate;
		this.id = id;
		this.emailProfessor = emailProfessor;
	}
	
	public String getName()
	{	
		return this.Name;
	}
	
	public String getStartingDate()
	{
		return this.startingDate;
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
		Name = name;
	}

	public void setStartingDate(String startingDate) {
		this.startingDate = startingDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public void setEmailProfessor(String emailProfessor) {
		this.emailProfessor = emailProfessor;
	}

}
