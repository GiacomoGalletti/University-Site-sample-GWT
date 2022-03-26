package com.google.gwt.sample.progettoingegneria.shared;

import java.io.Serializable;

public class Grade implements Serializable{

	private int value;
	
	// prendere i corsi dal database per verificare l'esistenza del corso inserito
	public Grade(int value) {
		this.value = value;
	}
	
	public int getValue() {
		return this.value;
	}
	
	public void setValue(int newValue) {
		this.value = newValue;
	}
	
}
