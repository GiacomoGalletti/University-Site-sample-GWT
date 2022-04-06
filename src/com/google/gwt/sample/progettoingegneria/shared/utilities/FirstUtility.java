package com.google.gwt.sample.progettoingegneria.shared.utilities;

import java.util.UUID;

import com.google.gwt.user.client.ui.Composite;

public class FirstUtility {

	public static synchronized String generateID() {
		return UUID.randomUUID().toString();
	}
	
	
	public static void setVisibility(Composite c) {
		if (c.isVisible()) {
			c.setVisible(false);
		}else {
			c.setVisible(true);
		}
	}
}
