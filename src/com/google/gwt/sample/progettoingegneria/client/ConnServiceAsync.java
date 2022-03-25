package com.google.gwt.sample.progettoingegneria.client;

import com.google.gwt.user.client.rpc.AsyncCallback;

public interface ConnServiceAsync {
	
	void testCall(String input, AsyncCallback<String> callback);
	
	void loginRequest(String user, String passw, AsyncCallback<Boolean> callback);
}
