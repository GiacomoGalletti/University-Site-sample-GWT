package com.google.gwt.sample.stockwatcher.server;

import java.io.File;

import org.mapdb.DB;
import org.mapdb.DBMaker;
import org.mapdb.HTreeMap;

public class DBCorsi {
	
	private static DB getDBCorsi() {

		DB db = DBMaker.newFileDB(new File("DBCorsi.db")).make();	
		HTreeMap<String, String> myMap = db.createHashMap("myMap").make();
		myMap.put("key1", "value");
		return db;	
	}
	
	
}
