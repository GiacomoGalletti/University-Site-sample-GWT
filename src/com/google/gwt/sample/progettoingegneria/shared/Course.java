package com.google.gwt.sample.progettoingegneria.shared;

import java.io.Serializable;

public class Course implements Serializable{

	private static final long serialVersionUID = 1L; 
	private String Name;
	private String startingDate;
	private String endDate;

	public Course() {}
	
	public Course(String name,String startingDate, String endDate) 
	{
		this.Name = name;
		this.startingDate = startingDate;
		this.endDate = endDate;
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
	
}
