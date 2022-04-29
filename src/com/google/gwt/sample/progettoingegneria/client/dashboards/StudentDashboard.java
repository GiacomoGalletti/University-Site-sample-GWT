package com.google.gwt.sample.progettoingegneria.client.dashboards;

import com.google.gwt.sample.progettoingegneria.client.Session;
import com.google.gwt.sample.progettoingegneria.client.menucomponents.StudentMenuComponent;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.VerticalPanel;

public class StudentDashboard extends Composite {
	private VerticalPanel vPanel = new VerticalPanel();
	
	public StudentDashboard() {
		initWidget(this.vPanel);
		
		Label titleLabel = new Label("Dashboard Studente: "+Session.getSession().getEmail());
		Image logoImage = new Image();
		StudentMenuComponent studentMenu = new StudentMenuComponent();
		
		logoImage.setUrl("https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_960_720.jpg");
		logoImage.setWidth("50%");
		
		this.vPanel.add(titleLabel);
		this.vPanel.add(logoImage);
		this.vPanel.add(studentMenu);
	}
	
}
