package com.google.gwt.sample.stockwatcher.client;

import com.google.gwt.user.client.rpc.RemoteService;

public interface ConnService extends RemoteService{
	
		  String createDB() throws IllegalArgumentException;
		  
		}

