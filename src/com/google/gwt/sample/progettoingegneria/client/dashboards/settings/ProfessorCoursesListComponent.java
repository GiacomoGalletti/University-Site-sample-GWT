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
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.VerticalPanel;

/**
 * componente che permette ad un Professor di vedere la
 * lista dei SUOI corsi (e non di altri)
 * 
 */

public class ProfessorCoursesListComponent extends Composite{

	private HorizontalPanel baseHPanel = new HorizontalPanel();
	private VerticalPanel buttonvPanel = new VerticalPanel();
	private HorizontalPanel hPanel = new HorizontalPanel();
	private HorizontalPanel curseManhPanel = new HorizontalPanel();
	private ProfessorCourseCreationComponent createCourse = new ProfessorCourseCreationComponent();
	private ProfessorCoursesModifierComponent courseManComp;
	
	private ListBox coursesListBox = new ListBox();
	private Button createCourseBtn = new Button("Crea nuovo corso");
	
	public ProfessorCoursesListComponent() {
		initWidget(this.baseHPanel);

		updateCoursesListView();
		coursesListBox.addDoubleClickHandler(new ListBoxHandler());
		createCourseBtn.addClickHandler(new CreateCourseBtnHandler());
		
		hPanel.add(coursesListBox);
		buttonvPanel.add(hPanel);
		buttonvPanel.add(createCourseBtn);
		baseHPanel.add(buttonvPanel);
	}
	
	public void updateCoursesListView() {
		ConnServiceSingleton.getConnService().viewCoursesInfo(Session.getSession().getEmail(), new AsyncCallback<String>() {

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
	
	
	private class ListBoxHandler implements  DoubleClickHandler {

	     @Override
	      public void onDoubleClick(DoubleClickEvent event) {
	    	 curseManhPanel.clear();
	    	 courseManComp = new ProfessorCoursesModifierComponent(coursesListBox.getSelectedItemText());
	    	 curseManhPanel.add(courseManComp);
	    	 hPanel.add(curseManhPanel);
	      }
	}
	
	
	private class CreateCourseBtnHandler implements ClickHandler {
		@Override
		public void onClick(ClickEvent event) {
			baseHPanel.add(createCourse);
		}
	}
	
	
}
