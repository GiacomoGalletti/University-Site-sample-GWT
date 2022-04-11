package com.google.gwt.sample.progettoingegneria.client;

import com.google.gwt.core.client.GWT;

/**
 * 
 * istanza singleton della connessione client e server
 * quando si vuole inviare una richiesta al server bisogna richiamare
 * ConnServiceSingleton.getConnService()
 */
public class ConnServiceSingleton {

	private static ConnServiceAsync connService;
	
	private ConnServiceSingleton() {}
	
	public static synchronized ConnServiceAsync getConnService() {
		if (connService == null) {
			connService = GWT.create(ConnService.class);
		}	
		return connService;
	}
}
