package com.google.gwt.sample.progettoingegneria.shared;

import java.io.Serializable;
import java.util.Date;

import com.google.gwt.i18n.shared.DateTimeFormat;
import com.google.gwt.user.client.Window;

public class Course implements Serializable{

	private static final long serialVersionUID = 1L; 
	private String Name;
	private String startingDate;
	private String endDate;

	public Course() {}
	
	public Course(String name) 
	{
		//DateTimeFormat format = DateTimeFormat.getFormat("dd/MM/yyyy");
		//Date a = format.parse(startingDate);
		//Date b = format.parse(endDate);		
		this.Name = name;
		//this.endDate = endDate;
		//this.startingDate = startingDate;
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
