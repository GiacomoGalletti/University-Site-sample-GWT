package com.google.gwt.sample.progettoingegneria.shared;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

public class Exam {
	
	@SuppressWarnings("unused")
	private String date;
	
	
	public Exam (String date ) throws ParseException {
		Date a = new SimpleDateFormat("dd/MM/yyyy").parse(date);
		// manca un controllo se esiste già un esame a tale data a tale corso
		if (FieldVerifier.dateValidityCheck(a)) {
			this.date = date;
			
		} else {
			throw new IllegalArgumentException();
		}
	}

}
