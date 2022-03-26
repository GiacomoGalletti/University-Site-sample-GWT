package com.google.gwt.sample.progettoingegneria.shared;

import java.text.ParseException;

public interface CourseFactory {
	public Course createCourse(String name, String startingDate, String endDate) throws ParseException;
}
