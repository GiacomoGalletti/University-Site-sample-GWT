package com.google.gwt.sample.progettoingegneria.client.dashboards.settings;

import com.google.gwt.event.dom.client.DoubleClickEvent;
import com.google.gwt.event.dom.client.DoubleClickHandler;
import com.google.gwt.sample.progettoingegneria.client.ConnServiceSingleton;
import com.google.gwt.sample.progettoingegneria.client.Session;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.VerticalPanel;

public class ProfessorListExamsComponent extends Composite{
	private HorizontalPanel baseHPanel = new HorizontalPanel();
	private VerticalPanel vPanel = new VerticalPanel();

	
	private ListBox coursesListBox = new ListBox();
	
	public ProfessorListExamsComponent(){
		initWidget(this.baseHPanel);
		updateCoursesListView();
		vPanel.add(new Label("GESTIONE ESAME"));
		coursesListBox.addDoubleClickHandler(new ListBoxHandlerFromExamManagement());
		vPanel.add(new Label("I TUOI CORSI:"));
		vPanel.add(coursesListBox);
		baseHPanel.add(vPanel);
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
	
	
	private class ListBoxHandlerFromExamManagement implements  DoubleClickHandler {

	     @Override
	      public void onDoubleClick(DoubleClickEvent event) {
	    	 baseHPanel.clear();
	    	 baseHPanel.add(new ProfessorExamModifierComponent(coursesListBox.getSelectedItemText()));
	      }
	}
}
