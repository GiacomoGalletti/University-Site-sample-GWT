package com.google.gwt.sample.progettoingegneria.server.Databases;

import java.io.File;
import java.util.Set;
import java.util.List;
import java.util.Map.Entry;
import org.mapdb.BTreeMap;
import org.mapdb.DB;
import org.mapdb.DBMaker;
import com.google.gwt.sample.progettoingegneria.shared.Course;

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
	// metodo che ritorna i corsi creati dal professore
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
	
	
	
	public static boolean setCourseData(String name , String startData , String endData, String newName)
	{
		
		DB db = getCoursersDB();
		Course course = getCourse(name);
		
		if (!newName.equals(name)) {
			course.setName(newName);
		}
		course.setStartDate(startData);
		course.setEndDate(endData);
		replaceCourse(course.getId(),course);	
		db.commit();
		db.close();
		return true;
	}
	
	
	private static void replaceCourse(String oldItemKey, Course newItem) {
		DB db = getCoursersDB();
		BTreeMap<String, Course> coursesMap = db.getTreeMap("coursesMap");
		coursesMap.replace(oldItemKey, newItem);
		db.commit();
		db.close();
	}
	
	public static String viewCoursesInfo() {
        DB db = getCoursersDB();
        BTreeMap<String, Course> coursesMap = db.getTreeMap("coursesMap");

        String result = "";
        Set<String> keysU = coursesMap.keySet(); 

        for (String key : keysU) {
            if(coursesMap.get(key).getClass() == Course.class)

                result = result +
                "Nome corso: " + coursesMap.get(key).getName() + 
                "     Data Inizio:  " + coursesMap.get(key).getStartingDate() + 
                "     Data Fine:  " + coursesMap.get(key).getEndDate() + 
                "     EmailProfessore: " +  coursesMap.get(key).getEmailProfessor() 
                + "\n";
        }
        db.commit();
        db.close();
        return result;
    }
	// ritorna gli corsi a cui uno studente può iscriversi (ovvero non si è già iscritto)
	public static String retrieveAviableCourses(String email) {
		DB db = getCoursersDB();
        BTreeMap<String, Course> coursesMap = db.getTreeMap("coursesMap");

        String result = "";
        Set<String> keysU = coursesMap.keySet(); 

        for (String key : keysU) {
            Course current = coursesMap.get(key);
        	if(!current.getStudentsEmail().contains(email)) {
                result += current.getName() + "@";
            }
        }
        db.commit();
        db.close();
        return result;
	}
	// ritorna gli corsi a cui uno studente è già iscritto
	public static String retrieveSubscribedCourses(String email) {
		DB db = getCoursersDB();
        BTreeMap<String, Course> coursesMap = db.getTreeMap("coursesMap");

        String result = "";
        Set<String> keysU = coursesMap.keySet(); 

        for (String key : keysU) {
            Course current = coursesMap.get(key);
        	if(current.getStudentsEmail().contains(email)) {
                result += current.getName() + "\n";
            }
        }
        db.commit();
        db.close();
        return result;
	}
	// metodo per la registrazione di uno studente al corso selezionato
	public static boolean courseRegistration(String emailStudente, String courseName) {
        Course selectedCourse = getCourse(courseName);
        selectedCourse.addStudentEmail(emailStudente);  
        replaceCourse(selectedCourse.getId(), selectedCourse);
        return true;
	}
	
	// metodo che restituisce gli studenti iscritta al corso in input
	
	public static String getStudentsCourseList(String courseName) {	

		List<String> studentsEmails = getCourse(courseName).getStudentsEmail();
		String result = "";
		for(String s : studentsEmails) {
			result += s + "\n";
		}
		return result;
	}
	
}	

	



