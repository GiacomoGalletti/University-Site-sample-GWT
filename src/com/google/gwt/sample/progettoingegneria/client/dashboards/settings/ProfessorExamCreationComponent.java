package com.google.gwt.sample.progettoingegneria.client.dashboards.settings;

import java.util.ArrayList;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.sample.progettoingegneria.client.ConnServiceSingleton;
import com.google.gwt.sample.progettoingegneria.shared.Exam;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;

public class ProfessorExamCreationComponent extends Composite {
	
	private VerticalPanel widgetBasePanel = new VerticalPanel();
	private TextBox examNameBox = new TextBox();
	private TextBox examDateBox = new TextBox();
	private TextBox examprofNameBox = new TextBox();
	private Button confirmCreationButton = new Button("Crea esame");
	
	public ProfessorExamCreationComponent() {
		
		initWidget(this.widgetBasePanel);
		widgetBasePanel.add(new Label("CREA NUOVO ESAME"));
		widgetBasePanel.add(new Label("Nome esame: "));
		widgetBasePanel.add(examNameBox);
		widgetBasePanel.add(new Label("Data esame: "));
		widgetBasePanel.add(examDateBox);
		widgetBasePanel.add(new Label("nome prof (campo che sarà riempito automaticamente): "));
		widgetBasePanel.add(examprofNameBox);
		
		widgetBasePanel.add(confirmCreationButton);
		confirmCreationButton.addClickHandler(new confirmCreationButtonHandler());
	}
	
	private class confirmCreationButtonHandler implements ClickHandler{

		@Override
		public void onClick(ClickEvent event) {
			ArrayList<String> demostudents = new ArrayList<String>();
			demostudents.add("gek");
			demostudents.add("frency");
			demostudents.add("tia");
			
			Exam e = new Exam();
			
			ConnServiceSingleton.
			getConnService().
			addExam(
					examNameBox.getText(),
					examDateBox.getText(),
					examprofNameBox.getText(),
					demostudents,
					new AsyncCallback<String>() {
						
						@Override
						public void onFailure(Throwable caught) {
							Window.alert("ERROR: " + caught);
						}
						
						@Override
						public void onSuccess(String result) {
							Window.alert(" "+ result);
							
						}
				});
			
			
		}
	
	}
}
