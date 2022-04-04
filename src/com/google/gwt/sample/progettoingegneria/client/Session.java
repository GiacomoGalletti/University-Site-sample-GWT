package com.google.gwt.sample.progettoingegneria.client;

import com.google.gwt.sample.progettoingegneria.shared.State;

public class Session {

	private String email;
	private State tipo;
	
	private static Session currentSession = null;
	
	private Session(State tipo,String email) {
		this.tipo = tipo;
		this.email = email;
	}
	
	public static synchronized Session getSession() {
		if (currentSession == null) {
			currentSession = new Session(State.NOT_SIGNED,null);
		}	
		return currentSession;
	}
	
	public State getTipo() {return this.tipo;}
	
	private void setTipo(State tipo) {this.tipo = tipo;}
	
	public String getEmail() {return this.email;}
	
	private void setEmail(String email) {this.email = email;}
	
	public void setSession(State tipo, String email) {
		setTipo(tipo);
		setEmail(email);
	}

}

