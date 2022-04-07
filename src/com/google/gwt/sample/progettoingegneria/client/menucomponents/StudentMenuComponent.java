package com.google.gwt.sample.progettoingegneria.client.menucomponents;

import com.google.gwt.event.dom.client.DoubleClickEvent;
import com.google.gwt.event.dom.client.DoubleClickHandler;
import com.google.gwt.sample.progettoingegneria.client.dashboards.settings.CoursesListComponent;
import com.google.gwt.sample.progettoingegneria.client.dashboards.settings.CoursesSignUpComponent;
import com.google.gwt.sample.progettoingegneria.client.dashboards.settings.ExamSignUpComponent;
import com.google.gwt.sample.progettoingegneria.client.dashboards.settings.GradesViewComponent;
import com.google.gwt.sample.progettoingegneria.client.dashboards.settings.PersonalInfoComponent;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.VerticalPanel;

public class StudentMenuComponent extends Composite{
	private VerticalPanel hPanel = new VerticalPanel();
	private ListBox actionsListBox = new ListBox();
	
	private PersonalInfoComponent infoView = new PersonalInfoComponent();
	private CoursesListComponent coursesListView = new CoursesListComponent();
	private CoursesSignUpComponent courseSignUpView = new CoursesSignUpComponent();
	private GradesViewComponent gradesView = new GradesViewComponent();
	private ExamSignUpComponent examView = new ExamSignUpComponent();
	
	public StudentMenuComponent() {
		initWidget(this.hPanel);
		
		actionsListBox.addItem("visualizza lista corsi disponibili");
		actionsListBox.addItem("iscriviti ad un corso");
		actionsListBox.addItem("registrati ad un esame");
		actionsListBox.addItem("visualizza le tue informazioni personali");
		actionsListBox.addItem("visualizza i tuoi voti");
		actionsListBox.setVisibleItemCount(5);
		actionsListBox.addDoubleClickHandler(new ActionsListBoxDCHandler());
		
		this.hPanel.add(actionsListBox);
	}
	
	private class ActionsListBoxDCHandler implements DoubleClickHandler{

		@Override
		public void onDoubleClick(DoubleClickEvent event) {
			cleanhPanel();
			int userchoice = actionsListBox.getSelectedIndex();
			switch(userchoice) {
			case 0:
				hPanel.add(coursesListView);
				break;
			case 1:
				hPanel.add(coursesListView);
				hPanel.add(courseSignUpView);
				break;
			case 2:
				hPanel.add(examView);
				break;
			case 3:
				hPanel.add(infoView);
				break;
			case 4:
				hPanel.add(gradesView);
				break;
			}
		}
	}
	
	private void cleanhPanel() {
		hPanel.remove(infoView);
		hPanel.remove(coursesListView);
		hPanel.remove(courseSignUpView);
		hPanel.remove(gradesView);
	}
}
