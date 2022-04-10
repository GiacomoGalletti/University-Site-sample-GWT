package com.google.gwt.sample.progettoingegneria.client.dashboards.settings;

import com.google.gwt.sample.progettoingegneria.client.ConnServiceSingleton;
import com.google.gwt.sample.progettoingegneria.client.Session;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.user.client.ui.VerticalPanel;

/**
 * componente che deve permettere ad uno studente di vedere 
 * l'elenco completo dei suoi voti
 * (basta una textArea dai via)
 */

public class GradesViewComponent extends Composite {
	private VerticalPanel vPanel = new VerticalPanel();
	private TextArea gradesTextArea = new TextArea();
	
	public GradesViewComponent() {
		initWidget(this.vPanel);
		vPanel.add(new Label("VOTI ESAMI:"));
		gradesTextArea.setHeight("250px");
		gradesTextArea.setWidth("250px");
		retrieveGrades();
		vPanel.add(gradesTextArea);
	}
	
	private void retrieveGrades() {
		ConnServiceSingleton.getConnService().getGrades(
				Session.getSession().getEmail(),
				new AsyncCallback<String>() {

					@Override
					public void onFailure(Throwable caught) {
						Window.alert("Error." + "impossibile visualizzare voti esami");
						
					}

					@Override
					public void onSuccess(String result) {
						gradesTextArea.setText(result);
						
					}
			
		} );
	}
}
