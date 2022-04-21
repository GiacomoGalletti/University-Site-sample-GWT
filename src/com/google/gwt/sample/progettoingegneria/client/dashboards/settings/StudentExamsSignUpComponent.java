package com.google.gwt.sample.progettoingegneria.client.dashboards.settings;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.DoubleClickEvent;
import com.google.gwt.event.dom.client.DoubleClickHandler;
import com.google.gwt.sample.progettoingegneria.client.ConnServiceSingleton;
import com.google.gwt.sample.progettoingegneria.client.Session;
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
 * componente che deve permettere ad uno studente di iscriversi ad un esame
 * 
 */

public class StudentExamsSignUpComponent extends Composite {
	private HorizontalPanel hPanel = new HorizontalPanel();
	private VerticalPanel vPanel = new VerticalPanel();
	private Label examsLb = new Label();
	private ListBox coursesLb = new ListBox();
	private TextArea listSubscribedExamsTa = new TextArea();
	String[] examInfo;
	Button confirmButton = new Button("iscriviti");

	public StudentExamsSignUpComponent() {
		getAvailableCourses();
		getSubscribedExams(); 
		listSubscribedExamsTa.setWidth("220px");
		listSubscribedExamsTa.setHeight("500px");
		this.hPanel.add(new Label("CORSI A CUI SEI ISCRITTO:"));
		this.hPanel.add(coursesLb);
		this.confirmButton.addClickHandler(new ConfirmButtonHandler());
		this.coursesLb.addDoubleClickHandler(new coursesLbHandler());
		this.vPanel.add(hPanel);
		this.vPanel.add(new Label("ESAMI A CUI SEI ISCRITTO:"));
		this.vPanel.add(listSubscribedExamsTa);
	
		initWidget(this.vPanel);
	}

	private void getSubscribedExams() {
		ConnServiceSingleton.getConnService().retrieveSubscribedExams(Session.getSession().getEmail(),
				new AsyncCallback<String>() {

					@Override
					public void onFailure(Throwable caught) {
						Window.alert("ERROR: " + "impossibile ottenere lsita esami a cui sei iscritto");
						
					}

					@Override
					public void onSuccess(String result) {
						listSubscribedExamsTa.setText(result);
						
					}
		});
		
	}

	private void getAvailableCourses() {
		ConnServiceSingleton.getConnService().retrieveSubscribedCourses(Session.getSession().getEmail(),
				new AsyncCallback<String>() {
					@Override
					public void onFailure(Throwable caught) {
						Window.alert("ERROR: " + "impossibile ottenere corsi a cui sei iscritto");
					}

					@Override
					public void onSuccess(String result) {
						String[] courses = result.split("\n");

						for (int i = 0; i < courses.length; i++) {
							coursesLb.addItem(courses[i]);
						}
						coursesLb.setVisibleItemCount(coursesLb.getItemCount());
					}
				});
	}

	private void getAvailableExams() {
		
		
		
		ConnServiceSingleton.getConnService().getAvailableExams(
				Session.getSession().getEmail(),
				coursesLb.getSelectedItemText(),
				new AsyncCallback<String>() {
					@Override
					public void onFailure(Throwable caught) {
						Window.alert("ERROR: " + "impossibile visualizzare esami");
					}

					@Override
					public void onSuccess(String result) {
						
						if(!result.equals("") && !result.equals("signed")) { 	//se non sei ancora registrato mostra Data e ora dell'esame
							TextArea examInfoTa = new TextArea();
							examInfo = result.split("\n");
							examsLb.setText("Esame disponibile:" + "\n" + examInfo[0]);
							hPanel.add(examsLb);
							hPanel.add(confirmButton);
							
							examInfoTa.setText("Data: " +examInfo[1] +"\n" +
												"Ora: " + examInfo[2]);
							hPanel.add(examInfoTa);
											
						} else if (result.equals("signed")){
							hPanel.remove(confirmButton);
							hPanel.add(examsLb);
							examsLb.setText("sei già registrato all'esame " + coursesLb.getSelectedItemText());
						} else {
							hPanel.remove(confirmButton);
							hPanel.add(examsLb);
							examsLb.setText("Nessun esame in programma");
						}
						
					}
				});
	}

	private class coursesLbHandler implements DoubleClickHandler {
		@Override
		public void onDoubleClick(DoubleClickEvent event) {
			getAvailableExams();
		}
	}

	private class ConfirmButtonHandler implements ClickHandler {

		@Override
		public void onClick(ClickEvent event) {
			ConnServiceSingleton.getConnService().registerStudentInExam(examInfo[0],
					Session.getSession().getEmail(), new AsyncCallback<Boolean>() {

						@Override
						public void onFailure(Throwable caught) {
							Window.alert("ERROR: " + caught);

						}

						@Override
						public void onSuccess(Boolean result) {
							
							examsLb.setText("Iscrizione avvenuta con successo!");
							hPanel.remove(confirmButton);
						}

					});
		}
	}

}
