package com.google.gwt.sample.progettoingegneria.client.dashboards.settings;

import java.util.Date;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.i18n.shared.DateTimeFormat;
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
	private Button deleteBtn = new Button("Elimina esame");
	
	private String[] currentExam;
	
	public ProfessorExamModifierComponent(String courseName) {
		initWidget(this.vPanel);
	
		ConnServiceSingleton.getConnService().getExamData(courseName, new AsyncCallback<String>() {

			@Override
			public void onFailure(Throwable caught) {
				Window.alert("Non riesco a trovare le informazioni sul server.");	
			}

			@Override
			public void onSuccess(String result) {
				currentExam = result.split("@"); 
				
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
				vPanel.add(subscribedStudentsTa);
			}
		});
		
		confirmBtn.addClickHandler(new confirmBtnHandler());
		deleteBtn.addClickHandler(new deleteBtnHandler());
	}
	private void initSubscribedStudents() {
		ConnServiceSingleton.getConnService().getStudentsCourseList(currentExam[0],new AsyncCallback<String>() {

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
	
	private class confirmBtnHandler implements  ClickHandler {

		
		@Override
		public void onClick(ClickEvent event) {
			
		if (!courseNameTb.getText().equals("") 
				&& !dateTb.getText().equals("") 
				&& !hourTb.getText().equals("") 
				&& !classroomTb.getText().equals("")
				&& !durationTb.getText().equals("")) {
			try {
				Date date = DateTimeFormat.getFormat("dd/MM/yyyy").parse(dateTb.getText());
				if (date.after(new Date())) {
					ConnServiceSingleton.getConnService().setExamData(
							currentExam[0],
							dateTb.getText(),
							hourTb.getText(),
							classroomTb.getText(),
							durationTb.getText(),
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
				} else {
					Window.alert("Data inserita non corretta");
					courseNameTb.setText(currentExam[0]);
					dateTb.setText(currentExam[1]);
					hourTb.setText(currentExam[2]);
					
				}
			} catch(IllegalArgumentException e) {
				Window.alert("Formato data non valido\ninserire: giorno/mese/anno");
				courseNameTb.setText(currentExam[0]);
				dateTb.setText(currentExam[1]);
				hourTb.setText(currentExam[2]);
				classroomTb.setText(currentExam[3]);
				durationTb.setText(currentExam[4]);
			}
		}else {
			Window.alert("campi vuoti");
			courseNameTb.setText(currentExam[0]);
			dateTb.setText(currentExam[1]);
			hourTb.setText(currentExam[2]);
			classroomTb.setText(currentExam[3]);
			durationTb.setText(currentExam[4]);
		}
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
