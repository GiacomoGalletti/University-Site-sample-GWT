package com.google.gwt.sample.progettoingegneria.client.dashboards.settings;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.DoubleClickEvent;
import com.google.gwt.event.dom.client.DoubleClickHandler;
import com.google.gwt.sample.progettoingegneria.client.ConnServiceSingleton;
import com.google.gwt.sample.progettoingegneria.client.Session;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.VerticalPanel;

/**
 * componente che deve permettere ad uno studente di iscriversi ad un esame (e
 * vedere la lista degli esami disponibili?)
 * 
 */

public class StudentExamsSubscriptionAviable extends Composite {
	private VerticalPanel vPanel = new VerticalPanel();
	private Label examsLb = new Label();
	private ListBox coursesLb = new ListBox();
	Button confirmButton = new Button("iscriviti");

	public StudentExamsSubscriptionAviable() {
		getAvailableCourses();
		this.vPanel.add(new Label("CORSI A CUI SEI ISCRITTO:"));
		this.vPanel.add(coursesLb);
		this.confirmButton.addClickHandler(new ConfirmButtonHandler());
		this.coursesLb.addDoubleClickHandler(new coursesLbHandler());
		initWidget(this.vPanel);
	}

	private void getAvailableCourses() {
		ConnServiceSingleton.getConnService().retrieveSubscribedCourses(Session.getSession().getEmail(),
				new AsyncCallback<String>() {
					@Override
					public void onFailure(Throwable caught) {
						Window.alert("ERROR: " + "impossibile ottenere corsi");
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
		ConnServiceSingleton.getConnService().getAvailableExams(coursesLb.getSelectedItemText(),new AsyncCallback<String>() {
					@Override
					public void onFailure(Throwable caught) {
						Window.alert("ERROR: " + "impossibile visualizzare esami");
					}

					@Override
					public void onSuccess(String result) {
						
						if(!result.equals("")) {
							examsLb.setText("Esame disponibile:" + "\n" + result);
							vPanel.add(examsLb);
							vPanel.add(confirmButton);
						} else {
							vPanel.remove(confirmButton);
							vPanel.add(examsLb);
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
			examsLb.setText("Iscrizione avvenuta con successo!");
			ConnServiceSingleton.getConnService().registerStudentInExam(examsLb.getText().split("\n")[1],
					Session.getSession().getEmail(), new AsyncCallback<Boolean>() {

						@Override
						public void onFailure(Throwable caught) {
							Window.alert("ERROR: " + caught);

						}

						@Override
						public void onSuccess(Boolean result) {
							if (result) {
								Window.alert("iscritto");
							}

						}

					});
		}
	}

}
