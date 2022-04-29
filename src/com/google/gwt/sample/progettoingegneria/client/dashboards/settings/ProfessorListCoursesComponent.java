package com.google.gwt.sample.progettoingegneria.client.dashboards.settings;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.DoubleClickEvent;
import com.google.gwt.event.dom.client.DoubleClickHandler;
import com.google.gwt.sample.progettoingegneria.client.ConnServiceSingleton;
import com.google.gwt.sample.progettoingegneria.client.Session;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.VerticalPanel;

/**
 * GUI DA RIFARE PER MATRIOSKA DI PANELs
 * 
 */

public class ProfessorListCoursesComponent extends Composite{

	private HorizontalPanel baseHPanel = new HorizontalPanel();
	private VerticalPanel buttonvPanel = new VerticalPanel();
	private HorizontalPanel hPanel = new HorizontalPanel();
	
	private ListBox coursesListBox = new ListBox();
	private Button createBtn = new Button();
	
	public ProfessorListCoursesComponent() {
		initWidget(this.baseHPanel);

		updateCoursesListView();

			buttonvPanel.add(new Label("GESTIONE CORSO"));
			coursesListBox.addDoubleClickHandler(new ListBoxHandlerFromCourseManagement());
			createBtn.addClickHandler(new CreateCourseBtnHandlerFromCourseManagement());
			createBtn.setText("Crea nuovo corso");
			buttonvPanel.add(new Label("I TUOI CORSI:"));
			hPanel.add(coursesListBox);
			buttonvPanel.add(hPanel);
			baseHPanel.add(buttonvPanel);
			buttonvPanel.add(createBtn);
	}
	public void updateCoursesListView() {
		ConnServiceSingleton.getConnService().viewProfessorCoursesInfo(Session.getSession().getEmail(), new AsyncCallback<String>() {

			@Override
			public void onFailure(Throwable caught) {
				Window.alert("Errore comunicazione server: UPDATECOURSE");
			}

			@Override
			public void onSuccess(String result) {
				String[] list = result.split("\n"); 			
				for (int i=0; i<list.length; i++) {
					coursesListBox.addItem(list[i]);
				}
				coursesListBox.setVisibleItemCount(list.length);
			}
		});
	}
	
	
	private class ListBoxHandlerFromCourseManagement implements  DoubleClickHandler {

	     @Override
	      public void onDoubleClick(DoubleClickEvent event) {
	    	 clearBasePanel();
	    	 baseHPanel.add(new ProfessorCoursesModifierComponent(coursesListBox.getSelectedItemText()));
	      }
	}
		
	private class CreateCourseBtnHandlerFromCourseManagement implements ClickHandler {
		@Override
		public void onClick(ClickEvent event) {
			ProfessorCourseCreationComponent createCourse = new ProfessorCourseCreationComponent();
			clearBasePanel();
			baseHPanel.add(createCourse);
		}
	}
		
	private void clearBasePanel() {
		baseHPanel.clear();
	}
	
}
