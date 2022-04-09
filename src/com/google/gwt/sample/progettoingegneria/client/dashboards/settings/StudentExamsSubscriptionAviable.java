package com.google.gwt.sample.progettoingegneria.client.dashboards.settings;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.sample.progettoingegneria.client.ConnServiceSingleton;
import com.google.gwt.sample.progettoingegneria.client.Session;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;

/**
 * componente che deve permettere ad uno studente di
 * iscriversi ad un esame (e vedere la lista degli esami disponibili?)
 * 
 */

public class StudentExamsSubscriptionAviable extends Composite {
	VerticalPanel vPanel = new VerticalPanel();
	Button searchExamsButton = new Button("cerca/aggiorna esami");
	Label l1 = new Label("esami disponibili");
	TextArea txta = new TextArea();
	Label l2 = new Label("digita l'esame al quale vuoi iscriverti");
	TextBox tb = new TextBox();
	Button confirmButton = new Button("iscriviti");
	
	public StudentExamsSubscriptionAviable() {
		initWidget(this.vPanel);
		
		this.vPanel.add(searchExamsButton);
		this.vPanel.add(l1);
		this.vPanel.add(txta);
		this.vPanel.add(l2);
		this.vPanel.add(tb);
		this.vPanel.add(confirmButton);
		
		txta.setWidth("300px");
		txta.setHeight("300px");
		confirmButton.addClickHandler(new ConfirmButtonHandler());
		searchExamsButton.addClickHandler(new SearchExamsButtonHandler());
	}

	private void getAvailableExams() {
		
		ConnServiceSingleton.getConnService().getAvailableExams(
				Session.getSession().getEmail(),
				new AsyncCallback<String>() {
			@Override
			public void onFailure(Throwable caught) {
				Window.alert("ERROR: " + caught);
			}
			
			@Override
			public void onSuccess(String result) {
				txta.setText(result);
				
			}
		});
	}
	
	private class ConfirmButtonHandler implements ClickHandler {
		@Override
		public void onClick(ClickEvent event) {
			String selectedExam = tb.getText();
			String selectedStudent = Session.getSession().getEmail();
			
			ConnServiceSingleton.getConnService().registerStudentInExam(
					selectedExam,
					selectedStudent,
					new AsyncCallback<Boolean>() {

						@Override
						public void onFailure(Throwable caught) {
							Window.alert("ERROR: " + caught);
							
						}

						@Override
						public void onSuccess(Boolean result) {
							if(result) {
								Window.alert("iscritto");
							}
							
						}
						
					}
					);
		}
	}
	
	private class SearchExamsButtonHandler implements ClickHandler {
		@Override
		public void onClick(ClickEvent event) {
			getAvailableExams();
		}
	}

}
