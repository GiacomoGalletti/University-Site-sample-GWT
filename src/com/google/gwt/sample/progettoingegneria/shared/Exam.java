package com.google.gwt.sample.progettoingegneria.shared;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class Exam implements Serializable{
	
	private static final long serialVersionUID = 1L; 
	private String name;
	private String date;
	private ArrayList<String> studentsEmail;
	private String profEmail;
	
	public Exam() {}
	
	public Exam (
			String name, 
			String date ,
			String profEmail,
			ArrayList<String> studentsEmail
			) {
		this.name = name;
		this.date = date;
		this.studentsEmail = studentsEmail;
		this.profEmail = profEmail;
	}
	
	public String getName() {
		return this.name;
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

}
