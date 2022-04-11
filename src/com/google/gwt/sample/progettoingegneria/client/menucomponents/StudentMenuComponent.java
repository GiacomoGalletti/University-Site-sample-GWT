package com.google.gwt.sample.progettoingegneria.client.menucomponents;

import com.google.gwt.event.dom.client.DoubleClickEvent;
import com.google.gwt.event.dom.client.DoubleClickHandler;
import com.google.gwt.sample.progettoingegneria.client.dashboards.settings.CoursesListComponent;
import com.google.gwt.sample.progettoingegneria.client.dashboards.settings.StudentCoursesSignUpComponent;
import com.google.gwt.sample.progettoingegneria.client.dashboards.settings.StudentExamsSubscriptionAviable;
import com.google.gwt.sample.progettoingegneria.client.dashboards.settings.GradesViewComponent;
import com.google.gwt.sample.progettoingegneria.client.dashboards.settings.PersonalInfoComponent;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.VerticalPanel;

public class StudentMenuComponent extends Composite{
	private VerticalPanel basePanel = new VerticalPanel();
	private VerticalPanel vPanel = new VerticalPanel();
	private ListBox actionsListBox = new ListBox();
	
	private PersonalInfoComponent infoView;
	private CoursesListComponent coursesListView;
	private StudentCoursesSignUpComponent courseSignUpView;
	private GradesViewComponent gradesView;
	private StudentExamsSubscriptionAviable examView;
	
	
	public StudentMenuComponent() {
		initWidget(this.basePanel);
		actionsListBox.addItem("visualizza lista corsi disponibili");
		actionsListBox.addItem("iscriviti ad un corso");
		actionsListBox.addItem("registrati ad un esame");
		actionsListBox.addItem("visualizza le tue informazioni personali");
		actionsListBox.addItem("visualizza i tuoi voti");
		actionsListBox.setVisibleItemCount(5);
		actionsListBox.addDoubleClickHandler(new ActionsListBoxDCHandler());
		this.basePanel.add(actionsListBox);
		this.basePanel.add(vPanel);
	}
	
	private class ActionsListBoxDCHandler implements DoubleClickHandler{

		@Override
		public void onDoubleClick(DoubleClickEvent event) {
			cleanhPanel();
			int userchoice = actionsListBox.getSelectedIndex();
			switch(userchoice) {
			case 0:
				coursesListView = new CoursesListComponent();
				vPanel.add(coursesListView);
				break;
			case 1:
				courseSignUpView = new StudentCoursesSignUpComponent();
				vPanel.add(courseSignUpView);
				break;
			case 2:
				examView  = new StudentExamsSubscriptionAviable();
				vPanel.add(examView);
				break;
			case 3:
				infoView = new PersonalInfoComponent();
				vPanel.add(infoView);
				break;
			case 4:
				gradesView = new GradesViewComponent();
				vPanel.add(gradesView);
				break;
			}
		}
	}
	
	private void cleanhPanel() {
		vPanel.clear();
	}
}
