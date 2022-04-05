package com.google.gwt.sample.progettoingegneria.client.dashboards.settings;

import java.util.ArrayList;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.sample.progettoingegneria.client.ConnServiceSingleton;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.user.client.ui.VerticalPanel;

/**
 * componente che deve permettere di inviare i voti
 * l'idea più facile per implementarlo è
 * 1 : mostrare gli esami del docente con una textarea o ListBox
 * 2 : richiedere al docente di scrivere il nome dell'esame 
 * 		del quale si vogliono inserire i voti
 * 3 : mostrare elenco studenti iscritti (textarea o ListBox?)
 * 4 : prendere in input il voto di ciascun utente.
 * 
 */

public class SendGradesComponent extends Composite {
	private VerticalPanel vPanel = new VerticalPanel();
	private HorizontalPanel subHPanel = new HorizontalPanel();
	private ListBox examsList = new ListBox();
	private Button searchExamsButton = new Button("cerca esami disponibili");
	
	private TextArea studentsArea = new TextArea();
	private TextArea gradesArea = new TextArea();
	
	public SendGradesComponent() {
		initWidget(this.vPanel);
		
		this.vPanel.add(new Label("scegli l'esame"));
		this.vPanel.add(examsList);
		this.vPanel.add(searchExamsButton);
		this.vPanel.add(subHPanel);
		
		gradesArea.setHeight("200px");
		gradesArea.setWidth("200px");
		studentsArea.setHeight("200px");
		studentsArea.setWidth("200px");
		
		this.subHPanel.add(studentsArea);
		this.subHPanel.add(gradesArea);
		
		searchExamsButton.addClickHandler(new SearchButtonHandler());
		examsList.setVisibleItemCount(5);
	}
	
	private class SearchButtonHandler implements ClickHandler {
		@Override
		public void onClick(ClickEvent event) {
			retrieveExams();
		}
	}
	
	public void retrieveExams() {
		String profnamedemo = "prof";
		
		ConnServiceSingleton
		.getConnService()
		.retrieveExams(
				profnamedemo,
				new AsyncCallback<ArrayList<String>>() {
					
					@Override
					public void onFailure(Throwable caught) {
						Window.alert("ERROR: " + caught);
					}
					
					@Override
					public void onSuccess(ArrayList<String> result) {
						
						ArrayList<String> exams = new ArrayList<String>();
						for(int i = 0; i< exams.size(); i++) {
							examsList.addItem(exams.get(i));
						}
						Window.alert("esami trovati " + exams.size());
					}
			});
		
		
	}

}


