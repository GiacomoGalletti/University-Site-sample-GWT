package com.google.gwt.sample.progettoingegneria.client.dashboards.settings;

import com.google.gwt.sample.progettoingegneria.client.ConnService;
import com.google.gwt.sample.progettoingegneria.client.ConnServiceAsync;
//import com.google.gwt.sample.progettoingegneria.client.StudentMenuComponent.buttonConfirmHandler;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.VerticalPanel;

public class StudentSettingComponent extends Composite {
	private VerticalPanel vPanel = new VerticalPanel();
	private CoursesListComponent coursesListPanel = new CoursesListComponent();
	private CoursesSignUpPanel coursesSignUpPanel = new CoursesSignUpPanel();
	private ExamSignUpComponent examSignUpPanel = new ExamSignUpComponent();
	private InfoViewComponent infoViewPanel = new InfoViewComponent();
	private GradesViewComponent GradesViewPanel = new GradesViewComponent();
	
	public StudentSettingComponent() {
		initWidget(this.vPanel);
		
		this.vPanel.add(coursesListPanel);
		this.vPanel.add(coursesSignUpPanel);
		this.vPanel.add(examSignUpPanel);
		this.vPanel.add(infoViewPanel);
		this.vPanel.add(GradesViewPanel);
		
		
	}
	
	public void hideComponents() {
		coursesListPanel.setVisible(false);
		coursesSignUpPanel.setVisible(false);
		examSignUpPanel.setVisible(false);
		infoViewPanel.setVisible(false);
		GradesViewPanel.setVisible(false);
	}
	
	
}
