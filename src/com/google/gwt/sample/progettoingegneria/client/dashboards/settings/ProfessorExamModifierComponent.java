package com.google.gwt.sample.progettoingegneria.client.dashboards.settings;

import java.util.Date;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.i18n.shared.DateTimeFormat;
import com.google.gwt.regexp.shared.MatchResult;
import com.google.gwt.regexp.shared.RegExp;
import com.google.gwt.sample.progettoingegneria.client.ConnServiceSingleton;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;

public class ProfessorExamModifierComponent  extends Composite{

/**
 * componente che permette ad un Professor
 * di gestire l'esame.
 * Viene costruito passando a parametro la stringa
 * dell'esame da modificare
 * 
 */
	
	private VerticalPanel vPanel = new VerticalPanel();
	private Label courseNameTb = new Label();
	private TextBox dateTb = new TextBox();
	private TextBox hourTb = new TextBox();
	private TextBox classroomTb = new TextBox();
	private TextBox durationTb = new TextBox();

	private TextArea subscribedStudentsTa =  new TextArea();;
	
	private HorizontalPanel hPanelBtn = new HorizontalPanel();
	private Button confirmBtn = new Button("Conferma Modifiche");
	private Button createBtn = new Button("Crea esame");
	private Button deleteBtn = new Button("Elimina esame");
	
	private String[] currentExam;
	private String courseName = "";
	public ProfessorExamModifierComponent(String courseName) {
		initWidget(this.vPanel);
	
		this.courseName = courseName;
		ConnServiceSingleton.getConnService().getExamData(courseName, new AsyncCallback<String>() {

			@Override
			public void onFailure(Throwable caught) {
				Window.alert("Non riesco a trovare le informazioni sul server.");	
			}

			@Override
			public void onSuccess(String result) {
				if(result.equals("NO_EXAM_CREATED")) {
					courseNameTb.setText("Nessun esame creato per questo corso");
					vPanel.add(courseNameTb);
					createBtn.addClickHandler(new CreateCourseBtnHandlerFromExamManagement());
					vPanel.add(createBtn);
				}else {
					currentExam = result.split("\n"); 
					
					courseNameTb.setText(currentExam[0]);
					dateTb.setText(currentExam[1]);
					hourTb.setText(currentExam[2]);
					classroomTb.setText(currentExam[3]);
					durationTb.setText(currentExam[4]);
					hPanelBtn.add(confirmBtn);
					hPanelBtn.add(deleteBtn);
					vPanel.add(new Label("MODIFICA ESAME"));
					vPanel.add(new Label("Nome Corso:"));
					vPanel.add(courseNameTb);
					vPanel.add(new Label("Data:"));
					vPanel.add(dateTb);
					vPanel.add(new Label("Ora inizio:"));
					vPanel.add(hourTb);
					vPanel.add(new Label("Aula:"));
					vPanel.add(classroomTb);
					vPanel.add(new Label("Durata:"));
					vPanel.add(durationTb);
					vPanel.add(hPanelBtn);
					initSubscribedStudents();
					subscribedStudentsTa.setWidth("221px");
					subscribedStudentsTa.setHeight("221px");
					vPanel.add(subscribedStudentsTa);
				}
			}
		});
		
		confirmBtn.addClickHandler(new confirmBtnHandler());
		deleteBtn.addClickHandler(new deleteBtnHandler());
	}
	private void initSubscribedStudents() {
		ConnServiceSingleton.getConnService().getStudentsExamList(currentExam[0],new AsyncCallback<String>() {

			@Override
			public void onFailure(Throwable caught) {
				Window.alert("Errore server.\nLista studenti iscritti all'esame non aggiornata");
			}

			@Override
			public void onSuccess(String result) {
				subscribedStudentsTa.setText("LISTA STUDENTI ISCRITTI:"+"\n"+ result);
			}
			
		});
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

	private class confirmBtnHandler implements ClickHandler {
		@Override
		public void onClick(ClickEvent event) {

			if (!courseNameTb.getText().equals("") && !classroomTb.getText().equals("")
					&& fildVerifier(dateTb.getText(), hourTb.getText(), durationTb.getText())) {
				try {
					ConnServiceSingleton.getConnService().setExamData(currentExam[0], dateTb.getText(),
							hourTb.getText(), classroomTb.getText(), durationTb.getText(),
							new AsyncCallback<Boolean>() {
								@Override
								public void onFailure(Throwable caught) {
									Window.alert("Errore aggiornamento dati.");

								}

								@Override
								public void onSuccess(Boolean result) {
									if (result) {
										Window.alert("Esame aggiornato");
									}
								}
							});

				} catch (IllegalArgumentException e) {
					Window.alert("Formato data non valido\ninserire: giorno/mese/anno");
					courseNameTb.setText(currentExam[0]);
					dateTb.setText(currentExam[1]);
					hourTb.setText(currentExam[2]);
					classroomTb.setText(currentExam[3]);
					durationTb.setText(currentExam[4]);
				}
			} else {
				Window.alert("campi vuoti");
				courseNameTb.setText(currentExam[0]);
				dateTb.setText(currentExam[1]);
				hourTb.setText(currentExam[2]);
				classroomTb.setText(currentExam[3]);
				durationTb.setText(currentExam[4]);
		}
		}
	}
	
	private class CreateCourseBtnHandlerFromExamManagement implements ClickHandler {
		@Override
		public void onClick(ClickEvent event) {
			ProfessorExamCreationComponent createExam = new ProfessorExamCreationComponent(courseName);
			vPanel.clear();
			vPanel.add(createExam);
		}
	}
	
	
	private class deleteBtnHandler implements ClickHandler {

		@Override
		public void onClick(ClickEvent event) {
			ConnServiceSingleton.getConnService().deleteExam(currentExam[0], new AsyncCallback<Boolean>() {

				@Override
				public void onFailure(Throwable caught) {
					Window.alert("Errore server");
					
				}

				@Override
				public void onSuccess(Boolean result) {
					if (result) {
						vPanel.clear();
						Window.alert("esame eliminato.");
					} else {
						Window.alert("esame non presente nel database");
					}
				}
				
			});
		}
		
	}
	
}
