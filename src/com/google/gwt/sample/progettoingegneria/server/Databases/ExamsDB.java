package com.google.gwt.sample.progettoingegneria.server.Databases;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import org.mapdb.BTreeMap;
import org.mapdb.DB;
import org.mapdb.DBMaker;

import com.google.gwt.sample.progettoingegneria.shared.Exam;

public class ExamsDB {
	
	private static DB getExamsDB() {
		DB db = DBMaker.newFileDB(new File("dbExams1")).make();		
		return db;	
	}
	
	public static String addExam(String courseName, String date, String hour, String prof, String classroom, String duration, ArrayList<String> students){
		DB db = getExamsDB();
		BTreeMap<String, Exam> examsMap = db.getTreeMap("examsMap");
		Exam e = new Exam(courseName, date, hour, prof, classroom, duration, students);
		examsMap.put(e.getName(),e);
		db.commit();
		db.close();
		return "exam added ";
	}
	
	public static ArrayList<String> retrieveExams(String profName) {
		DB db = getExamsDB();
		BTreeMap<String, Exam> examsMap = db.getTreeMap("examsMap");
		
		List<String> result = new ArrayList<String>();
		Set<String> keysU = examsMap.keySet(); 
		
		for (String key : keysU) {
			Exam current = examsMap.get(key);
			result.add(current.getName());
		}
		db.commit();
		db.close();
		System.out.println(result.get(0));
		return (ArrayList<String>)result;
	}
	
	public static ArrayList<String> retrieveStudents(String selectedExam) {
		DB db = getExamsDB();
		BTreeMap<String, Exam> examsMap = db.getTreeMap("examsMap");
		
		List<String> result = new ArrayList<String>();
		Set<String> keysU = examsMap.keySet(); 
		
		for (String key : keysU) {
			Exam current = examsMap.get(key);
			if(current.getName().equals(selectedExam)) {
				for (String student : current.getStudentsEmail()) {
					result.add(student);
				}
			}
		}
		db.commit();
		db.close();
		return (ArrayList<String>)result;
	}
	
	// metodo che restituisce gli esami di un corso in input
	public static String getAvailableExams(String courseName) {
		DB db = getExamsDB();
		BTreeMap<String, Exam> examsMap = db.getTreeMap("examsMap");
		Set<String> keysExams = examsMap.keySet();
		String result = "";
		for (String key : keysExams) {
			Exam current = examsMap.get(key);
			if (current.getCourseName().equals(courseName)) {
				result += current.getName() + "\n";
			}
		}
		db.commit();
		db.close();
		return result;
	}

	public static boolean registerStudentInExam(String selectedExam, String selectedStudent) {
		DB db = getExamsDB();
		BTreeMap<String, Exam> examsMap = db.getTreeMap("examsMap");		
		Set<String> keysU = examsMap.keySet(); 
		for (String key : keysU) {
			Exam current = examsMap.get(key);
			if(current.getName().equals(selectedExam)) {
				current.addStudentEmail(selectedStudent);
				examsMap.replace(key, current);
			}
		}
		db.commit();
		db.close();
		return true;
	}

	public static String clearDB() {
		DB db = getExamsDB();
		BTreeMap<String, Exam> examsMap = db.getTreeMap("examsMap");
		examsMap.clear();
		db.commit();
		db.close();
		return "ExamsDB";
	}

	public static ArrayList<String> retrieveExamsForSecretary() {
		DB db = getExamsDB();
		BTreeMap<String, Exam> examsMap = db.getTreeMap("examsMap");
		Set<String> keysExams = examsMap.keySet();
		List<String> result = new ArrayList<String>();
		for (String key : keysExams) {
			Exam current = examsMap.get(key);
			result.add(current.getName());
		}
		db.commit();
		db.close();
		return (ArrayList<String>)result;
	}
		
}
