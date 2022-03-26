package com.google.gwt.sample.progettoingegneria.shared;

import java.text.ParseException;

public class ConcreteCourseCreator implements CourseFactory{
	
	public ConcreteCourseCreator() {}
	
	@Override
	public Course createCourse(String name, String startingDate, String endDate) throws ParseException {
	
		return new Course(name,startingDate,endDate);
	}
	
}
