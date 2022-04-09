package com.google.gwt.sample.progettoingegneria.server.Databases;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.mapdb.BTreeMap;
import org.mapdb.DB;
import org.mapdb.DBMaker;

import com.google.gwt.sample.progettoingegneria.shared.Course;
import com.google.gwt.sample.progettoingegneria.shared.Exam;
import com.google.gwt.user.client.Window;

public class ExamsDB {
	
	private static DB getExamsDB() {
		DB db = DBMaker.newFileDB(new File("dbExams1")).make();		
		return db;	
	}
	
	public static String addExam(String courseName, String date, String hour, String prof, String classroom, String duration, ArrayList<String> students){
		DB db = getExamsDB();
		BTreeMap<String, Exam> examsMap = db.getTreeMap("examsMap");
		/*
		 * TODO: controllo sul courseName: verificare che esista il corso nel @CoursesDB
		 * controllo sulle date
		 */
		Exam e = new Exam(courseName, date, hour, prof, classroom, duration, students);
		examsMap.put(e.getName(),e);
		db.commit();
		db.close();
		return "exam added ";
	}
	
	public static ArrayList<String> retrieveExams(String profName) {
		DB db = getExamsDB();
		BTreeMap<String, Exam> examsMap = db.getTreeMap("examsMap");
		
		ArrayList<String> result = new ArrayList<String>();
		Set<String> keysU = examsMap.keySet(); 
		
		for (String key : keysU) {
			Exam current = examsMap.get(key);
			result.add(current.getName());
		}
		db.commit();
		db.close();
		System.out.println(result.get(0));
		return result;
	}
	
	public static ArrayList<String> retrieveStudents(String selectedExam) {
		DB db = getExamsDB();
		BTreeMap<String, Exam> examsMap = db.getTreeMap("examsMap");
		
		ArrayList<String> result = new ArrayList<String>();
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
		return result;
	}

	public static String getAvailableExams(String studentEmail) {
		DB db = getExamsDB();
		BTreeMap<String, Exam> examsMap = db.getTreeMap("examsMap");
		
		Set<String> keysU = examsMap.keySet(); 
		boolean alreadySigned;
		
		String result = "";
		for (String key : keysU) {
			Exam current = examsMap.get(key);
			alreadySigned = false;
			ArrayList<String> signedStudents = current.getStudentsEmail();
			for(String email : signedStudents) {
				if(email.equals(studentEmail)) {
					alreadySigned = true;
				}
			}
			if(alreadySigned == false) {
				result = result + key + "\n";
			}
		}
		
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
	

	
}
