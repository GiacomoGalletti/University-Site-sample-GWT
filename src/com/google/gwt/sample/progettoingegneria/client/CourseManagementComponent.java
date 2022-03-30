package com.google.gwt.sample.progettoingegneria.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.sample.progettoingegneria.shared.Course;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;

public class CourseManagementComponent extends Composite{
	

	private TextBox courseNameBox = new TextBox();
	private TextBox startDateBox = new TextBox();
	private TextBox endDateBox = new TextBox();
	private VerticalPanel widgetBasePanel = new VerticalPanel();
	private ConnServiceAsync connService = GWT.create(ConnService.class);
	private Button confirmCreationButton = new Button("Crea corso");
	
	
	public CourseManagementComponent() {
		
		initWidget(this.widgetBasePanel);
		
		widgetBasePanel.add(new Label("Nome corso: "));
		widgetBasePanel.add(courseNameBox);
		widgetBasePanel.add(new Label("Data inizio: "));
		widgetBasePanel.add(startDateBox);
		widgetBasePanel.add(new Label("Data fine: "));
		widgetBasePanel.add(endDateBox);
		
		widgetBasePanel.add(confirmCreationButton);
		confirmCreationButton.addClickHandler(new confirmCreationButtonHandler());
	}
	
	private class confirmCreationButtonHandler implements ClickHandler{

		@Override
		public void onClick(ClickEvent event) {
						
			// i controlli sulle date inserite li faccio ora su client per prevenire problemi
			if (!courseNameBox.getText().equals("") && !startDateBox.getText().equals("") && !endDateBox.getText().equals("")) {
			
			connService.addCourse(new Course(courseNameBox.getText(),startDateBox.getText(),endDateBox.getText()), new AsyncCallback<Boolean>() {
			
			@Override
			public void onFailure(Throwable caught) {
				Window.alert("ERROR: " + caught);
			}
			
			@Override
			public void onSuccess(Boolean result) {
				Window.alert("Risultato: "+ result);
				
			}});
			} else {
			Window.alert("campi vuoti");
			}
		}
		
	}

}
