package com.google.gwt.sample.progettoingegneria.client.dashboards.settings;

import java.util.ArrayList;
import java.util.Date;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.i18n.shared.DateTimeFormat;
import com.google.gwt.regexp.shared.MatchResult;
import com.google.gwt.regexp.shared.RegExp;
import com.google.gwt.sample.progettoingegneria.client.ConnServiceSingleton;
import com.google.gwt.sample.progettoingegneria.client.Session;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;

public class ProfessorExamCreationComponent extends Composite {
	
	private VerticalPanel widgetBasePanel = new VerticalPanel();
	private Label courseNameLb = new Label();
	private TextBox examDateBox = new TextBox();
	private TextBox examHourBox = new TextBox();
	private TextBox classroomBox = new TextBox();
	private TextBox durationBox = new TextBox();
	private Button confirmCreationButton = new Button("Crea esame");
	
	public ProfessorExamCreationComponent(String courseName) {
		
		initWidget(this.widgetBasePanel);
		widgetBasePanel.add(new Label("CREA NUOVO ESAME"));
		widgetBasePanel.add(new Label("Nome corso: "));
		courseNameLb.setText(courseName);
		widgetBasePanel.add(courseNameLb);
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

	private class confirmCreationButtonHandler implements ClickHandler {

		@Override
		public void onClick(ClickEvent event) {
			if (fildVerifier(examDateBox.getText(), examHourBox.getText(), durationBox.getText())) {

				ArrayList<String> demostudents = new ArrayList<String>();
				ConnServiceSingleton.getConnService().addExam(courseNameLb.getText(), examDateBox.getText(),
						examHourBox.getText(), Session.getSession().getEmail(), classroomBox.getText(),
						durationBox.getText(), demostudents, new AsyncCallback<String>() {

							@Override
							public void onFailure(Throwable caught) {
								Window.alert("ERROR: " + caught);
							}

							@Override
							public void onSuccess(String result) {
								Window.alert(" " + result);

							}
						});
			}
		}

	}
	
	private boolean fildVerifier(String exDate,String exHour, String exDuration) {
		try {
			final Date date = DateTimeFormat.getFormat("dd/MM/yyyy").parse(exDate);
			final RegExp pattern = RegExp.compile("^[0-2][0-9]:[0-5][0-9]$");
			final MatchResult matcher = pattern.exec(exHour);
			final int duration =Integer.parseInt(exDuration);
			
			if (!date.after(new Date())){
				Window.alert("Data non valida.");
				return false;
			}
			
			if (duration <= 0) {
				Window.alert("Durata non valida.");
				return false;
			}
			
			boolean matchFound = matcher != null;
			
			if (!matchFound) {
				Window.alert("Orario non valido.\ninserisci il formato: HH:mm");
				return false;
			}
			
			if (Integer.parseInt(exDuration.split(":")[0]) < 9) {
				Window.alert("Orario non valido.\ninserisci un'orario successivo alle 09:00");
				return false;
			}
			
			return true;
		}catch(IllegalArgumentException e) {
			Window.alert(e.getMessage());
		}
		
		return false;
	}
}
