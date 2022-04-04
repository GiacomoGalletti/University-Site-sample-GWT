package com.google.gwt.sample.progettoingegneria.server.Databases;

import java.io.File;
import java.util.Set;
import java.util.Map.Entry;

import org.mapdb.BTreeMap;
import org.mapdb.DB;
import org.mapdb.DBMaker;
import com.google.gwt.sample.progettoingegneria.shared.Course;
import com.google.gwt.sample.progettoingegneria.shared.User;

public class CoursesDB {
	
	private static DB getCoursersDB() {
		DB db = DBMaker.newFileDB(new File("dbCourse1")).make();		
		return db;	
	}
	
	public static boolean addCourse(Course c){
		DB db = getCoursersDB();
		BTreeMap<String, Course> coursesMap = db.getTreeMap("coursesMap");		
		coursesMap.put(c.getId(),c);
		db.commit();
		db.close();
		return true;
	}
	
	public static String getCourseData(String name) {
		DB db = getCoursersDB();
		BTreeMap<String, Course> coursesMap = db.getTreeMap("coursesMap");

		String result = "";
		Set<String> keysU = coursesMap.keySet(); 

		for (String key : keysU) {
			Course current = coursesMap.get(key);
			if(current.getName().equals(name)) {
				result = coursesMap.get(key).getName() + "@" + coursesMap.get(key).getStartingDate() + "@" + coursesMap.get(key).getEndDate() + "@";
				db.commit();
				db.close();
				return result;
			}
		}
		db.commit();
		db.close();
		return "NaN" + "@" + "NaN" + "@" + "NaN" + "@";
	}
	
	public static String getCoursesList(String email) {
		DB db = getCoursersDB();
		BTreeMap<String, Course> coursesMap = db.getTreeMap("coursesMap");

		String result = "";
		Set<String> keysU = coursesMap.keySet(); 

		for (String key : keysU) {
			Course current = coursesMap.get(key);
			if(current.getEmailProfessor().equals(email)) {
				result += current.getName() + "@";
			}
		}
		db.commit();
		db.close();
		return result;
	}
	
	public static String clearDB() {
		DB db = getCoursersDB();
		BTreeMap<String, Course> coursesMap = db.getTreeMap("coursesMap");
		coursesMap.clear();
		db.commit();
		db.close();
		return "CoursesDB";
	}

	public static Course getCourse(String name) {
		DB db = getCoursersDB();
		BTreeMap<String, Course> coursesMap = db.getTreeMap("coursesMap");
		
		for (Entry<String, Course> entry : coursesMap.entrySet()) {
			Course current = entry.getValue();
			if(current.getName().equalsIgnoreCase(name)) {
				db.commit();
				db.close();
				return current;
			}
		}
		db.commit();
		db.close();
		return null;
	}
	 
	public static boolean checkCourseExist(String name) {
		DB db = getCoursersDB();
		BTreeMap<String, Course> coursesMap = db.getTreeMap("coursesMap");
		
		for (Entry<String, Course> entry : coursesMap.entrySet()) {
			if(entry.getValue().getName().equalsIgnoreCase(name)) {
				db.commit();
				db.close();
				return true;
			}
		}
		db.commit();
		db.close();
		return false;
	}
	
	public static boolean deleteCourse(String name) {
		DB db = getCoursersDB();
		BTreeMap<String, Course> coursesMap = db.getTreeMap("coursesMap");
		
		for (Entry<String, Course> entry : coursesMap.entrySet()) {
			if(entry.getValue().getName().equalsIgnoreCase(name)) {
				coursesMap.remove(entry.getValue().getId());
				db.commit();
				db.close();
				return true;
			}
		}
		db.commit();
		db.close();
		return false;
	}
		
	public static boolean setCourseData(String name, String newData, int type) {
		DB db = getCoursersDB();
		Course course = getCourse(name);
		
		switch(type) {
			case 0: // type: name
				course.setName(newData);
				replaceCourse(course.getId(),course);
				db.commit();
				db.close();
				break;
			case 1: // type: startDate
				course.setStartingDate(newData);
				replaceCourse(course.getId(),course);
				db.commit();
				db.close();
				break;
			case 2: // type: endDate
				course.setEndDate(newData);
				replaceCourse(course.getId(),course);
				db.commit();
				db.close();
				break;
			default:
				db.commit();
				db.close();
				return false;
		}
		
		return true;
	}
	
	private static void replaceCourse(String oldItemKey, Course newItem) {
		DB db = getCoursersDB();
		BTreeMap<String, Course> coursesMap = db.getTreeMap("coursesMap");
		coursesMap.replace(oldItemKey, newItem);
		db.commit();
		db.close();
	}
}
