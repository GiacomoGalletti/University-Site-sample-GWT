package com.google.gwt.sample.progettoingegneria.server.Databases;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.Map.Entry;
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
		examsMap.put(e.getCourseName(),e);
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
			result.add(current.getCourseName());
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
			if(current.getCourseName().equals(selectedExam)) {
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
				result = current.getCourseName();
				break;
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
			if(current.getCourseName().equals(selectedExam) && !current.getStudentsEmail().contains(selectedStudent)) {
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
			result.add(current.getCourseName());
		}
		db.commit();
		db.close();
		return (ArrayList<String>)result;
	}
	
	// ritorna i dati di un esame dal nome del corso in input
	public static String getExamData(String courseName) {
		DB db = getExamsDB();
		BTreeMap<String, Exam> examsMap = db.getTreeMap("examsMap");

		String result = "";
		Set<String> keysE = examsMap.keySet(); 

		for (String key : keysE) {
			Exam current = examsMap.get(key);
			if(current.getCourseName().equals(courseName)) {
				result = examsMap.get(key).getCourseName() + "@" + examsMap.get(key).getDate() + "@" + examsMap.get(key).getHour() + "@"
						+ examsMap.get(key).getClassroom() + examsMap.get(key).getDuration();
				db.commit();
				db.close();
				return result;
			}
		}
		db.commit();
		db.close();
		return "NaN" + "@" + "NaN" + "@" + "NaN" + "@";
	}
	
	// modifica i dati di un esame
	public static boolean setExamData(String courseName, String date , String hour, String classroom, String duration)
	{	
		DB db = getExamsDB();
		Exam exam = getExam(courseName);
		exam.setDate(date);
		exam.setHour(hour);
		exam.setClassroom(classroom);
		exam.setDuration(duration);
		replaceExam(courseName,exam);	
		db.commit();
		db.close();
		return true;
	}
	
	// ritorna un esame dal nome del corso
	public static Exam getExam(String courseName) {
		DB db = getExamsDB();
		BTreeMap<String, Exam> examsMap = db.getTreeMap("examsMap");
		
		for (Entry<String, Exam> entry : examsMap.entrySet()) {
			Exam current = entry.getValue();
			if(current.getCourseName().equalsIgnoreCase(courseName)) {
				db.commit();
				db.close();
				return current;
			}
		}
		db.commit();
		db.close();
		return null;
	}
	 
	// sostituisce un vecchio esame con uno aggiornato
	private static void replaceExam(String oldItemKey, Exam newItem) {
		DB db = getExamsDB();
		BTreeMap<String, Exam> examsMap = db.getTreeMap("examsMap");
		examsMap.replace(oldItemKey, newItem);
		db.commit();
		db.close();
	}
	
	// elimina l'esame con il nome del corso in input
	public static boolean deleteExam(String courseName) {
		DB db = getExamsDB();
		BTreeMap<String, Exam> examsMap = db.getTreeMap("examsMap");
		
		for (Entry<String, Exam> entry : examsMap.entrySet()) {
			if(entry.getValue().getCourseName().equalsIgnoreCase(courseName)) {
				examsMap.remove(entry.getValue().getCourseName());
				db.commit();
				db.close();
				return true;
			}
		}
		db.commit();
		db.close();
		return false;
	}
	
}
