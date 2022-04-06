package com.google.gwt.sample.progettoingegneria.client.dashboards.settings;

import java.util.Date;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.i18n.shared.DateTimeFormat;
import com.google.gwt.sample.progettoingegneria.client.ConnServiceSingleton;

/*
 * TODO: da completare
 * finestra per il settaggio di modifiche sul corso selezionato
 */

import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;

/**
 * componente che permette ad un Professor
 * di gestire il corso.
 * Viene costruito passando a parametro la stringa
 * del corso da modificare
 * 
 */

public class ProfessorCoursesModifierComponent extends Composite {
	private VerticalPanel vPanel = new VerticalPanel();

	private TextBox courseNameTb = new TextBox();
	private TextBox startDateTb = new TextBox();
	private TextBox endDateTb = new TextBox();
	
	private HorizontalPanel hPanelBtn = new HorizontalPanel();
	private Button confirmBtn = new Button("Conferma Modifiche");
	private Button deleteBtn = new Button("Elimina Corso");
	
	private String initialCourseName;
	private String[] currentCourse;
	
	public ProfessorCoursesModifierComponent(String courseName) {
		initWidget(this.vPanel);
		this.initialCourseName = courseName;
		
		ConnServiceSingleton.getConnService().getCourseData(initialCourseName, new AsyncCallback<String>() {

			@Override
			public void onFailure(Throwable caught) {
				Window.alert("Non riesco a trovare le informazioni sul server.");	
			}

			@Override
			public void onSuccess(String result) {
				currentCourse = result.split("@"); 
				
				courseNameTb.setText(currentCourse[0]);
				startDateTb.setText(currentCourse[1]);
				endDateTb.setText(currentCourse[2]);
				
				hPanelBtn.add(confirmBtn);
				hPanelBtn.add(deleteBtn);
				vPanel.add(new Label("MODIFICA CORSO"));
				vPanel.add(new Label("Nome Corso:"));
				vPanel.add(courseNameTb);
				vPanel.add(new Label("Data Inizio:"));
				vPanel.add(startDateTb);
				vPanel.add(new Label("Data fine:"));
				vPanel.add(endDateTb);
				vPanel.add(hPanelBtn);
			}
		});
		
		confirmBtn.addClickHandler(new confirmBtnHandler());
		deleteBtn.addClickHandler(new deleteBtnHandler());
	}
	
	
	private class confirmBtnHandler implements  ClickHandler {

		
		@Override
		public void onClick(ClickEvent event) {
			
		if (!courseNameTb.getText().equals("") && !startDateTb.getText().equals("") && !endDateTb.getText().equals("")) {
			try {
				Date start = DateTimeFormat.getFormat("dd/MM/yyyy").parse(startDateTb.getText());
				Date end = DateTimeFormat.getFormat("dd/MM/yyyy").parse(endDateTb.getText());
				if (end.after(start) && start.after(new Date())) {
					ConnServiceSingleton.getConnService().setCourseData(
							initialCourseName,
							startDateTb.getText(),
							endDateTb.getText(),
							courseNameTb.getText(),
							new AsyncCallback<Boolean>() {
	
						@Override
						public void onFailure(Throwable caught) {
							Window.alert("Errore aggiornamento dati.");
							
						}
	
						@Override
						public void onSuccess(Boolean result) {
							if (result) {
								Window.alert("Corso aggiornato");
							}
						}
					});	
				} else {
					Window.alert("Date inserite non corrette");
					courseNameTb.setText(currentCourse[0]);
					startDateTb.setText(currentCourse[1]);
					endDateTb.setText(currentCourse[2]);
				}
			} catch(IllegalArgumentException e) {
				Window.alert("Formato data non valido\ninserire: giorno/mese/anno");
				courseNameTb.setText(currentCourse[0]);
				startDateTb.setText(currentCourse[1]);
				endDateTb.setText(currentCourse[2]);
			}
		}else {
			Window.alert("campi vuoti");
			courseNameTb.setText(currentCourse[0]);
			startDateTb.setText(currentCourse[1]);
			endDateTb.setText(currentCourse[2]);
		}
		}
	}
	
	private class deleteBtnHandler implements ClickHandler {

		@Override
		public void onClick(ClickEvent event) {
			ConnServiceSingleton.getConnService().deleteCourse(initialCourseName, new AsyncCallback<Boolean>() {

				@Override
				public void onFailure(Throwable caught) {
					Window.alert("Errore server");
					
				}

				@Override
				public void onSuccess(Boolean result) {
					if (result) {
						vPanel.clear();
						/*
						 * TODO: per aggiornare la vista dei corsi devo richiamare:  updateCoursesListView() nella classe CourseQueryComponet
						 */
						Window.alert("corso eliminato.");
					} else {
						Window.alert("corso non presente nel database");
					}
				}
				
			});
		}
		
	}
}
