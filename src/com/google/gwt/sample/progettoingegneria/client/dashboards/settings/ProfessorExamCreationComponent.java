package com.google.gwt.sample.progettoingegneria.client.dashboards.settings;

import java.util.ArrayList;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.sample.progettoingegneria.client.ConnServiceSingleton;
import com.google.gwt.sample.progettoingegneria.client.Session;
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
	private TextBox courseNameBox = new TextBox();
	private TextBox examDateBox = new TextBox();
	private TextBox examHourBox = new TextBox();
	private TextBox classroomBox = new TextBox();
	private TextBox durationBox = new TextBox();
	private Button confirmCreationButton = new Button("Crea esame");
	
	public ProfessorExamCreationComponent() {
		
		initWidget(this.widgetBasePanel);
		widgetBasePanel.add(new Label("CREA NUOVO ESAME"));
		widgetBasePanel.add(new Label("Nome corso: "));
		widgetBasePanel.add(courseNameBox);
		widgetBasePanel.add(new Label("Data esame: [GG/MM/YYYY]"));
		widgetBasePanel.add(examDateBox);
		widgetBasePanel.add(new Label("Orario esame: [HH:MM]"));
		widgetBasePanel.add(examHourBox);
		widgetBasePanel.add(new Label("Aula: "));
		widgetBasePanel.add(classroomBox);
		widgetBasePanel.add(new Label("Durata esame(minuti): "));
		widgetBasePanel.add(durationBox);
		widgetBasePanel.add(new Label("email prof: " + Session.getSession().getEmail()));

		widgetBasePanel.add(confirmCreationButton);
		
		confirmCreationButton.addClickHandler(new confirmCreationButtonHandler());
		
	}
	
	private class confirmCreationButtonHandler implements ClickHandler{

		@Override
		public void onClick(ClickEvent event) {
			ArrayList<String> demostudents = new ArrayList<String>();
			demostudents.add("stu@stu");
			
			Exam e = new Exam();
			
			ConnServiceSingleton.
			getConnService().
			addExam(
					courseNameBox.getText(),
					examDateBox.getText(),
					examHourBox.getText(),
					Session.getSession().getEmail(),
					classroomBox.getText(),
					durationBox.getText(),
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
