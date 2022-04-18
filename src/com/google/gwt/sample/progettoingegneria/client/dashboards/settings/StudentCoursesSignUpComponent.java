package com.google.gwt.sample.progettoingegneria.client.dashboards.settings;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.sample.progettoingegneria.client.ConnServiceSingleton;
import com.google.gwt.sample.progettoingegneria.client.Session;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ButtonBase;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.VerticalPanel;

/**
 * componente che deve permettere ad uno studente di
 * iscriversi al corso.
 * Non mostra la lista dei corsi, quello è già fatto
 * da un altro componente @CoursesListComponent
 */
public class StudentCoursesSignUpComponent extends Composite {
	
	private VerticalPanel vPanel = new VerticalPanel();
	private ListBox coursesList = new ListBox();
	private ButtonBase submitBtn = new Button("ISCRIVITI");
	private String[] courses;

    
	public StudentCoursesSignUpComponent() {
		initWidget(vPanel);
		retrieveAviableCourses();
		vPanel.add(new Label("Elenco corsi disponibili"));
		vPanel.add(coursesList);
		submitBtn.addClickHandler(new submitBtnHandler());
		vPanel.add(submitBtn);
	}
	
	private void retrieveAviableCourses() {
		ConnServiceSingleton.getConnService().retrieveAviableCourses(Session.getSession().getEmail(), new AsyncCallback<String>() {

			@Override
			public void onFailure(Throwable caught) {
				Window.alert("Impossibile visualizzare i corsi disponibili");				
			}

			@Override
			public void onSuccess(String result) {
				courses = result.split("\n");
				
				for(int i=0; i < courses.length; i++) {
					coursesList.addItem(courses[i]);
				}
				
				coursesList.setVisibleItemCount(coursesList.getItemCount());
			}
			
		});
	}
		
	private class submitBtnHandler implements ClickHandler{

		@Override
		public void onClick(ClickEvent event) {
			ConnServiceSingleton.getConnService().courseRegistration(Session.getSession().getEmail(), coursesList.getSelectedItemText(), new AsyncCallback<Boolean>() {

				@Override
				public void onFailure(Throwable caught) {
					Window.alert("Errore server. Iscrizione fallita.");
				}

				@Override
				public void onSuccess(Boolean result) {
					Window.alert("Iscrizione avvenuta con successo.");
					coursesList.clear();
					retrieveAviableCourses();
				}
				
			});
		}
		
	}
	
}
