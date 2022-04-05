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

	private HorizontalPanel hPanel = new HorizontalPanel();
	private VerticalPanel vPanel = new VerticalPanel();
	private ProfessorCourseCreationComponent createCourse = new ProfessorCourseCreationComponent();
	private ProfessorCoursesManagementComponent courseManComp;
	
	private ListBox coursesListBox = new ListBox();
	private Button createCourseBtn = new Button("Crea nuovo corso");
	private int nListItem = 0;
	
	public ProfessorCoursesListComponent() {
		initWidget(this.hPanel);

		updateCoursesListView();
		coursesListBox.addDoubleClickHandler(new ListBoxHandler());
		createCourseBtn.addClickHandler(new CreateCourseBtnHandler());
		
		vPanel.add(coursesListBox);
		vPanel.add(createCourseBtn);
		hPanel.add(vPanel);
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
				nListItem = list.length;
				
				for (int i=0; i<list.length; i++) {
					coursesListBox.addItem(list[i]);
				}
				coursesListBox.setVisibleItemCount(nListItem);
			}
			
		});
		
	}
	
	private class ListBoxHandler implements  DoubleClickHandler {

	     @Override
	      public void onDoubleClick(DoubleClickEvent event) {
	    	 courseManComp = new ProfessorCoursesManagementComponent(coursesListBox.getSelectedItemText());
	    	 hPanel.add(courseManComp);
	      }
	}
	
	
	private class CreateCourseBtnHandler implements ClickHandler {
		@Override
		public void onClick(ClickEvent event) {
			hPanel.add(createCourse);
		}
	}
	
	
}
