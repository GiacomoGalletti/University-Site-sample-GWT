package com.google.gwt.sample.progettoingegneria.server.Databases;

import java.io.File;
import java.util.ArrayList;
import java.util.Set;

import org.mapdb.BTreeMap;
import org.mapdb.DB;
import org.mapdb.DBMaker;

import com.google.gwt.sample.progettoingegneria.shared.Course;
import com.google.gwt.sample.progettoingegneria.shared.User;

public class CoursesDB {
	
	private static DB getCoursesDB() {
		DB db = DBMaker.newFileDB(new File("dbProgettoIng")).make();		
		return db;	
	}
	
	public static boolean addCourse(Course c){
		DB db = getCoursesDB();
		BTreeMap<Integer, Course> coursesMap = db.getTreeMap("coursesMap");
		
		coursesMap.put(coursesMap.lastKey()+1, c);
		db.commit();
		db.close();
		return true;
	}
	
	public static ArrayList<String> getCoursesList() {

		DB db = getCoursesDB();
		BTreeMap<Integer, Course> coursesMap = db.getTreeMap("coursesMap");

		ArrayList<String> coursesList = new ArrayList<String>();
		Set<Integer> keysList = coursesMap.keySet(); 

		for (Integer key : keysList) {
				coursesList.add(coursesMap.get(key).getName());
		}

		return coursesList;
	}
}
