package com.google.gwt.sample.progettoingegneria.shared.utilities;

import java.util.UUID;

public class FirstUtility {

	public static synchronized String generateID() {
		return UUID.randomUUID().toString();
	}
}
