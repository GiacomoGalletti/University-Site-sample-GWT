package com.google.gwt.sample.progettoingegneria.shared;

import java.io.Serializable;

public class Grade implements Serializable{

	private static final long serialVersionUID = 1L;
	private int value;
	private GradeState state;
	private String examName;
	private String emailStudent;
	
	public Grade() {}
	
	public Grade(int value, GradeState state, String examName, String emailStudent) {
		super();
		this.value = value;
		this.state = state;
		this.examName = examName;
		this.emailStudent = emailStudent;
	}
	
	public int getValue() {
		return this.value;
	}
	
	public void setValue(int newValue) {
		this.value = newValue;
	}
	
	public void setState(GradeState state) {
		this.state = state;
	}
	
	public GradeState getState() {
		return this.state;
	}

	public String getEmailStudent() {
		return emailStudent;
	}

	public void setEmailStudent(String emailStudent) {
		this.emailStudent = emailStudent;
	}

	public String getExamName() {
		return examName;
	}

	public void setExamName(String examName) {
		this.examName = examName;
	}
}
