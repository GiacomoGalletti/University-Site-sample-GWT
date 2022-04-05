package com.google.gwt.sample.progettoingegneria.client.dashboards.settings;

import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.VerticalPanel;

/**
 * componente che deve permettere ad uno studente di vedere 
 * l'elenco completo dei suoi voti
 * (basta una textArea dai via)
 */

public class GradesViewComponent extends Composite {
	VerticalPanel vPanel = new VerticalPanel();
	
	public GradesViewComponent() {
		initWidget(this.vPanel);
	}
}
