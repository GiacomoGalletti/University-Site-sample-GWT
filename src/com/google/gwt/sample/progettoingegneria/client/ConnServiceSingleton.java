package com.google.gwt.sample.progettoingegneria.client;

import com.google.gwt.core.client.GWT;

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
