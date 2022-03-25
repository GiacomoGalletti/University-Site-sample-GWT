package com.google.gwt.sample.stockwatcher.client;

import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;

@RemoteServiceRelativePath("stockPrices")
public interface StockPriceService extends RemoteService {

    StockPrice[] getPrices(String[] symbols) throws DelistedException;

    void saveSymbols(String[] symbols);

	String[] loadSymbols();
	
	String testCall(String input);
	
	boolean loginRequest(String user, String passw);
}
