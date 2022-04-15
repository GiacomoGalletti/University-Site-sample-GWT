package com.google.gwt.sample.progettoingegneria.client.dashboards.settings;

import java.util.ArrayList;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.DoubleClickEvent;
import com.google.gwt.event.dom.client.DoubleClickHandler;
import com.google.gwt.sample.progettoingegneria.client.ConnServiceSingleton;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.user.client.ui.TextBoxBase;
import com.google.gwt.user.client.ui.VerticalPanel;

/**
 * componente che deve permettere di inviare i voti
 * l'idea pi� facile per implementarlo �
 * 1 : mostrare gli esami del docente con una textarea o ListBox
 * 2 : richiedere al docente di scrivere il nome dell'esame 
 * 		del quale si vogliono inserire i voti
 * 3 : mostrare elenco studenti iscritti (textarea o ListBox?)
 * 4 : prendere in input il voto di ciascun utente.
 * 
 */

public class ProfessorSendGradesComponent extends Composite {
	private VerticalPanel vPanel = new VerticalPanel();
	private HorizontalPanel subHPanel = new HorizontalPanel();
	private ListBox examsList = new ListBox();
	private Button searchExamsButton = new Button("cerca esami disponibili");
	private Button sendGradesButton = new Button("invia i voti");
	
	private TextBoxBase studentsArea = new TextArea();
	private TextBoxBase gradesArea = new TextArea();
	
	public ProfessorSendGradesComponent() {
		initWidget(this.vPanel);
		
		this.vPanel.add(searchExamsButton);
		this.vPanel.add(new Label("scegli l'esame"));
		this.vPanel.add(examsList);
		this.vPanel.add(subHPanel);
		
		gradesArea.setHeight("200px");
		gradesArea.setWidth("200px");
		studentsArea.setHeight("200px");
		studentsArea.setWidth("200px");
		
		this.subHPanel.add(studentsArea);
		this.subHPanel.add(gradesArea);
		this.subHPanel.add(sendGradesButton);
		
		searchExamsButton.addClickHandler(new SearchButtonHandler());
		sendGradesButton.addClickHandler(new SendGradesButtonHandler());
		examsList.setWidth("200px");
		examsList.setVisibleItemCount(5);
		examsList.addDoubleClickHandler(new ExamsListHandler());
	}
	
	private class SearchButtonHandler implements ClickHandler {
		@Override
		public void onClick(ClickEvent event) {
			retrieveExams();
		}
	}
	
	private class SendGradesButtonHandler implements ClickHandler {
		@Override
		public void onClick(ClickEvent event) {
			sendGrades();
		}
	}
	
	public class ExamsListHandler implements DoubleClickHandler{

		@Override
		public void onDoubleClick(DoubleClickEvent event) {
			String selectedExam = examsList.getSelectedItemText();
			retrieveStudents(selectedExam);		
		}	
	}
	
	public void retrieveStudents(String selectedExam) {
		ConnServiceSingleton
		.getConnService()
		.getStudentsExamList(selectedExam,
				new AsyncCallback<String>() {
			
				@Override
				public void onFailure(Throwable caught) {
					Window.alert("ERROR: " + caught);
				}
			
				@Override
				public void onSuccess(String result) {
					studentsArea.setText(result);
				}
		});
		
		
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
						
						for(int i = 0; i< result.size(); i++) {
							examsList.addItem(result.get(i));
						}
						Window.alert("esami trovati " + result.size());
					}
			});
	
	}
	
	public void sendGrades() {
		String[] gradesList = gradesArea.getText().split("\n");
		String[] studentsList = studentsArea.getText().split("\n");
		String selectedExam = examsList.getSelectedItemText();
		ConnServiceSingleton.getConnService().sendGrades(
				selectedExam,
				studentsList,
				gradesList, 
				new AsyncCallback<Boolean>() {

					@Override
					public void onFailure(Throwable caught) {
						Window.alert("Error. inserimento fallito.");
						
					}

					@Override
					public void onSuccess(Boolean result) {
						Window.alert("Inserimento avvenuto.");
						subHPanel.clear();
					}
					
				});
	}

}


