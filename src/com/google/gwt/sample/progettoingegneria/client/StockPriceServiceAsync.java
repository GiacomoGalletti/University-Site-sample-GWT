package com.google.gwt.sample.progettoingegneria.client;

import com.google.gwt.user.client.rpc.AsyncCallback;

public interface StockPriceServiceAsync {

    void getPrices(String[] symbols, AsyncCallback<StockPrice[]> callback);

    void loadSymbols(AsyncCallback<String[]> callback);

	void saveSymbols(String[] symbols, AsyncCallback<Void> callback);
	
	void testCall(String input, AsyncCallback<String> callback);
	
	void loginRequest(String user, String passw, AsyncCallback<Boolean> callback);
}
