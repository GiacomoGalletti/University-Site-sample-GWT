package com.google.gwt.sample.progettoingegneria.client;

import com.google.gwt.sample.progettoingegneria.shared.UserState;

public class Session {

	private String email;
	private UserState tipo;
	private int navIndex = 0;
	private static Session currentSession = null;
	
	private Session(UserState tipo,String email) {
		this.tipo = tipo;
		this.email = email;
	}
	
	public static synchronized Session getSession() {
		if (currentSession == null) {
			currentSession = new Session(UserState.NOT_SIGNED,null);
		}	
		return currentSession;
	}
	
	public UserState getTipo() {return this.tipo;}
	
	private void setTipo(UserState tipo) {this.tipo = tipo;}
	
	public String getEmail() {return this.email;}
	
	private void setEmail(String email) {this.email = email;}
	
	public void setSession(UserState tipo, String email) {
		setTipo(tipo);
		setEmail(email);
	}

	public int getNavIndex() {
		return navIndex;
	}

	public void setNavIndex(int navIndex) {
		this.navIndex = navIndex;
	}

}

