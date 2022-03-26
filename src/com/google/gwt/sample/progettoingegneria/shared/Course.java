package com.google.gwt.sample.progettoingegneria.shared;

import java.io.Serializable;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Course implements Serializable{

	private static final long serialVersionUID = 1L; 
	private String Name;
	private String startingDate;
	private String endDate;
	
	
	public Course(String name, String startingDate, String endDate) 
	{

		Date a;
		try {
			a = new SimpleDateFormat("dd/MM/yyyy").parse(startingDate);
			Date b = new SimpleDateFormat("dd/MM/yyyy").parse(endDate);
			if ( FieldVerifier.dateValidityCheck(a) && FieldVerifier.dateValidityCheck(b) && isValidCoupleDate(a,b)) {
			this.Name = name;
			}
			throw new IllegalArgumentException("Date error. dates insert not valid.");
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
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
	
	
	// la segreteria inserisce i voti: tramite file?
	
	  public boolean isValidCoupleDate(Date start, Date end) throws ParseException {
		  if ((end.after(start))) {
			return true;
		  }
		  return false;
	  }

}
