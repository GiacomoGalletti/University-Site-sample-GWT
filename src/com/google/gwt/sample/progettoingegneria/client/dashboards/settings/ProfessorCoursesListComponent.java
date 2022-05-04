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

public class ProfessorCoursesListComponent extends Composite{

	private HorizontalPanel baseHPanel = new HorizontalPanel();
	private VerticalPanel buttonvPanel = new VerticalPanel();
	private HorizontalPanel hPanel = new HorizontalPanel();
	private HorizontalPanel curseManhPanel = new HorizontalPanel();
	private ProfessorCourseCreationComponent createCourse = new ProfessorCourseCreationComponent();
	private ProfessorCoursesModifierComponent courseManComp;
	private ProfessorExamModifierComponent examManComp;
	private ProfessorExamCreationComponent createExam = new ProfessorExamCreationComponent();
	
	private ListBox coursesListBox = new ListBox();
	private Button createBtn = new Button();
	
	public ProfessorCoursesListComponent() {
		initWidget(this.baseHPanel);

		updateCoursesListView();
		if (Session.getSession().getNavIndex() == 0) { // apre la gestione corso
			buttonvPanel.add(new Label("GESTIONE CORSO"));
			coursesListBox.addDoubleClickHandler(new ListBoxHandlerFromCourseManagement());
			createBtn.addClickHandler(new CreateCourseBtnHandlerFromCourseManagement());
			createBtn.setText("Crea nuovo corso");
		} else if (Session.getSession().getNavIndex() == 1){ // apre la gestione esame
			buttonvPanel.add(new Label("GESTIONE ESAME"));
			coursesListBox.addDoubleClickHandler(new ListBoxHandlerFromExamManagement());
			createBtn.addClickHandler(new CreateCourseBtnHandlerFromExamManagement());
			createBtn.setText("Crea nuovo esame");
		}
		buttonvPanel.add(new Label("I TUOI CORSI:"));
		hPanel.add(coursesListBox);
		buttonvPanel.add(hPanel);
		buttonvPanel.add(createBtn);
		baseHPanel.add(buttonvPanel);
	}
	
	public void updateCoursesListView() {
		ConnServiceSingleton.getConnService().viewProfessorCoursesInfo(Session.getSession().getEmail(), new AsyncCallback<String>() {

			@Override
			public void onFailure(Throwable caught) {
				Window.alert("Errore comunicazione server: UPDATECOURSE");
			}

			@Override
			public void onSuccess(String result) {
				String[] list = result.split("@"); 
				
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
	    	 curseManhPanel.clear();
	    	 baseHPanel.remove(createCourse);
	    	 courseManComp = new ProfessorCoursesModifierComponent(coursesListBox.getSelectedItemText());
	    	 curseManhPanel.add(courseManComp);
	    	 hPanel.add(curseManhPanel);
	      }
	}
	
	private class ListBoxHandlerFromExamManagement implements  DoubleClickHandler {

	     @Override
	      public void onDoubleClick(DoubleClickEvent event) {
	    	 curseManhPanel.clear();
	    	 baseHPanel.remove(createExam);
	    	 examManComp = new ProfessorExamModifierComponent(coursesListBox.getSelectedItemText());
	    	 curseManhPanel.add(examManComp);
	    	 hPanel.add(curseManhPanel);
	      }
	}
	
	
	private class CreateCourseBtnHandlerFromCourseManagement implements ClickHandler {
		@Override
		public void onClick(ClickEvent event) {
			hPanel.remove(curseManhPanel);
			baseHPanel.add(createCourse);
		}
	}
	
	private class CreateCourseBtnHandlerFromExamManagement implements ClickHandler {
		@Override
		public void onClick(ClickEvent event) {
			hPanel.remove(curseManhPanel);
			baseHPanel.add(createExam);
		}
	}
	
}
