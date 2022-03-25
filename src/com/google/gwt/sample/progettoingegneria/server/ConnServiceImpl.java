package com.google.gwt.sample.progettoingegneria.server;
import com.google.gwt.sample.progettoingegneria.client.ConnService;
import com.google.gwt.user.server.rpc.RemoteServiceServlet;

public class ConnServiceImpl extends RemoteServiceServlet implements ConnService {
	private static final long serialVersionUID = 4192379456341403664L;

	@Override
	public String testCall(String input) {
		return "ho ricevuto "+ input;
	}
	
	@Override
	public boolean loginRequest(String user, String passw) {
		return false;
	}

}
