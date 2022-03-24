package com.google.gwt.sample.stockwatcher.server;

import java.io.File;
import java.rmi.server.RemoteServer;

import javax.servlet.ServletContext;

import org.mapdb.BTreeMap;
import org.mapdb.DB;
import org.mapdb.Engine;
import org.mapdb.HTreeMap;
import org.mapdb.DBMaker;

import com.google.gwt.sample.stockwatcher.client.ConnService;
import com.google.gwt.user.client.rpc.impl.Serializer;


public class StockWatcherServiceImpl extends RemoteServer implements ConnService{
	public static final String DB_FILE = "file1.db";
	public static final String SIMPLE_MAP = "simpleMap";
	
	/*
	public void loginRequest(String user, String pssw) {
		// TODO
	}
	
	public void createUserRequest() {
		// TODO
	}
	
	*/
	
	public String testCall(int number) {
		return "a";
	}

	@Override
	public String createDB() throws IllegalArgumentException {
		// TODO Auto-generated method stub
		return null;
	}
	
	
	
}
