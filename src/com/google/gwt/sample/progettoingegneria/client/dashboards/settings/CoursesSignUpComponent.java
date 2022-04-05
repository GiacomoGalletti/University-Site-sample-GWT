package com.google.gwt.sample.progettoingegneria.client.dashboards.settings;

import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.VerticalPanel;

/**
 * componente che deve permettere ad uno studente di
 * iscriversi al corso.
 * Non mostra la lista dei corsi, quello è già fatto
 * da un altro componente @CoursesListComponent
 */
public class CoursesSignUpComponent extends Composite {
	private VerticalPanel vPanel = new VerticalPanel();
	private ListBox coursesList = new ListBox();
	
	public CoursesSignUpComponent() {
		initWidget(vPanel);
		
		vPanel.add(new Label("Elenco corsi disponibili"));
		vPanel.add(coursesList);
	}
	
	
}
