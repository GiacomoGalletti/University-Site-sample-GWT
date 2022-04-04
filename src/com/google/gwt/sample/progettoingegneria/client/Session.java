package com.google.gwt.sample.progettoingegneria.client;

import com.google.gwt.sample.progettoingegneria.shared.State;

public class Session {

	private State tipo;
	
	private static Session currentSession = null;
	
	public Session(State tipo) {
		this.tipo = tipo;
	}
	
	public static synchronized Session getSession() {
		if (currentSession == null) {
			currentSession = new Session(State.NOT_SIGNED);
		}	
		return currentSession;
	}
	
	public State getTipo() {return this.tipo;}
	
	public void setTipo(State tipo) {this.tipo = tipo;}

}

