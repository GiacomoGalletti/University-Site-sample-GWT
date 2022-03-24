package com.google.gwt.sample.stockwatcher.client;

import com.google.gwt.user.client.rpc.AsyncCallback;

public interface ConnServiceAsync {
	
	void createDB(AsyncCallback<String> callback) throws IllegalArgumentException;

}
