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
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.WindowScrollListener;

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
		return "esame aggiunto ";
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
		return (ArrayList<String>)result;
	}

	// metodo che restituisce gli esami di un corso in input
	// senza quelli a cui lo studente in input è già iscritto
	public static String getAvailableExams(String studentEmail, String courseName) {
		String result = "";
		Exam current = getExam(courseName);
		if (current != null) {
			boolean alreadySigned = current.getStudentsEmail().contains(studentEmail);
			if (!alreadySigned) {
				result = current.getCourseName();
			} else {
				result = "signed";
			}
		}
		return result;
	}

	// aggiunge la mail dello studente alla lista dentro l'esame
	public static boolean registerStudentInExam(String selectedExam, String selectedStudent) {
		boolean result = false;
		
		Exam current = getExam(selectedExam);
		if (current.getCourseName().equals(selectedExam) && !current.getStudentsEmail().contains(selectedStudent)) {
			current.addStudentEmail(selectedStudent);
			replaceExam(current.getCourseName(), current);
		}
		if (current.getStudentsEmail().contains(selectedStudent)) {
			result = true;
		}

		return result;
	}

	//pulisce il db
	public static String clearDB() {
		DB db = getExamsDB();
		BTreeMap<String, Exam> examsMap = db.getTreeMap("examsMap");
		examsMap.clear();
		db.commit();
		db.close();
		return "ExamsDB";
	}
	
	// lista completa degli esami - per segreteria
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
						+ examsMap.get(key).getClassroom() + "@" + examsMap.get(key).getDuration();
				db.commit();
				db.close();
				return result;
			}
		}
		db.commit();
		db.close();
		return "NO_EXAM_CREATED";
	}
	
	// modifica i dati di un esame
	public static boolean setExamData(String courseName, String date , String hour, String classroom, String duration){	
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
			String currentExam = entry.getKey();
			if(currentExam.equalsIgnoreCase(courseName)) {
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
	
	// dato in input il nome dell'esame restitusce la lista di studenti iscritti
	public static String getStudentsExamList(String examName) {	
		DB db = getExamsDB();
		BTreeMap<String, Exam> examsMap = db.getTreeMap("examsMap");
		
		Set<String> keysE = examsMap.keySet();
		String result = "";
		
		for (String key : keysE) {
			Exam current = examsMap.get(key);
			if (current.getCourseName().equalsIgnoreCase(examName)) {
				ArrayList<String> studentsEmails = current.getStudentsEmail();
				if(studentsEmails.isEmpty()) {
					result = "la lista degli studenti per l'esame "+current.getCourseName()+" è vuota";//va qui
				}
				for(String s : studentsEmails) {
					result += s + "\n";
				}
			}
		}
		return result;
	}

	public static String retrieveSubscribedExams(String studentEmail) {
		DB db = getExamsDB();
		BTreeMap<String, Exam> examsMap = db.getTreeMap("examsMap");
		
		Set<String> keysE = examsMap.keySet();
		String result = "";
		
		for (String key : keysE) {
			Exam current = examsMap.get(key);
			if (current.getStudentsEmail().contains(studentEmail)) 
			{
				result = result + 
						"	Nome: " +current.getCourseName() +"\n" +
						"	Aula: "+current.getClassroom() + "\n" + 
						"	Data: "+current.getDate() + "\n" + 
						"	Ore: "+current.getHour() + "\n" + 
						"	Durata: "+current.getDuration()
						+"\n\n";
			}									
		}
		
		if(result.equals(""))
		{
			result="Non sei iscritto a nessun esame!";
		}
		
		db.commit();
		db.close();
		return result;
	}

	
}
