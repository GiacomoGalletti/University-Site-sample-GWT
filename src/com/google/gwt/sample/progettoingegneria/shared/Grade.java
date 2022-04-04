package com.google.gwt.sample.progettoingegneria.shared;

import java.io.Serializable;

public class Grade implements Serializable{

	private static final long serialVersionUID = 1L;
	private int value;
	
	public Grade() {}
	
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
