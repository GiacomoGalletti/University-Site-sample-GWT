package com.google.gwt.sample.progettoingegneria.server.Databases;

import java.io.File;
import java.util.Set;
import org.mapdb.BTreeMap;
import org.mapdb.DB;
import org.mapdb.DBMaker;
import com.google.gwt.sample.progettoingegneria.shared.Grade;
import com.google.gwt.sample.progettoingegneria.shared.GradeState;

public class GradesDB {
	// la mappa dbGrades avrà come chiave la concatenazione di [nomeEsame,emailStudente]
	private static DB getGradesDB() {
		DB db = DBMaker.newFileDB(new File("dbGrades")).make();		
		return db;	
	}
	
	public static boolean addGrades(String examName, String[] studentsList, String[] gradesList) {
		DB db = getGradesDB();
		BTreeMap<String, Grade> gradesMap = db.getTreeMap("gradesMap");

		for (int i = 0; i < studentsList.length; i++) {
			Grade g = new Grade(Integer.parseInt(gradesList[i]),GradeState.SENT, examName, studentsList[i]);
			gradesMap.put(g.getExamName() + "," + g.getEmailStudent(), g);
		}

		db.commit();
		db.close();
		return true;
	}

	public static String getGrades(String email) {
		DB db = getGradesDB();
		BTreeMap<String, Grade> gradesMap = db.getTreeMap("gradesMap");
		
		String result = "";
		Set<String> keysU = gradesMap.keySet(); 
		
		for (String key : keysU) {
			Grade current = gradesMap.get(key);
			if(current.getEmailStudent().equals(email) && current.getState() == GradeState.PUBLISHED) {
				result += current.getExamName() + ": " + current.getValue() + "\n";
			}
		}
		db.commit();
		db.close();
		return result;
	}

	public static String clearDB() {
		DB db = getGradesDB();
		BTreeMap<String, Grade> gradesMap = db.getTreeMap("gradesMap");
		gradesMap.clear();
		db.commit();
		db.close();
		return "GradesDB";
	}

	public static String retrieveGradesAndStudents(String selectedExam) {
		DB db = getGradesDB();
		BTreeMap<String, Grade> gradesMap = db.getTreeMap("gradesMap");
		
		String result = "";
		Set<String> keysU = gradesMap.keySet(); 
		
		for (String key : keysU) {
			Grade current = gradesMap.get(key);
			if(current.getExamName().equals(selectedExam) && current.getState() == GradeState.SENT) {
				result += current.getEmailStudent() + ": " + current.getValue() + "\n";
			}
		}
		db.commit();
		db.close();
		return result;
	}
	
	public static boolean publishGrades(String examName) {
		DB db = getGradesDB();
		BTreeMap<String, Grade> gradesMap = db.getTreeMap("gradesMap");
		
		Set<String> keysG = gradesMap.keySet(); 
		
		for (String key : keysG) {
			Grade current = gradesMap.get(key);
			if (current.getExamName().equalsIgnoreCase(examName) && current.getState() == GradeState.SENT) {
				current.setState(GradeState.PUBLISHED);
				replaceGrade(current.getExamName() + "," + current.getEmailStudent(), current);
			}
		}
		return true;
	}
	
	// sostituisce un vecchio voto con uno aggiornato
	private static void replaceGrade(String oldItemKey, Grade newItem) {
		DB db = getGradesDB();
		BTreeMap<String, Grade> gradesMap = db.getTreeMap("gradesMap");
		gradesMap.replace(oldItemKey, newItem);
		db.commit();
		db.close();
	}
	
}
