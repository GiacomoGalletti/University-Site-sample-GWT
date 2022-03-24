package com.google.gwt.sample.stockwatcher.client;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.VerticalPanel;

public class StudentDashboard extends Composite {
	private VerticalPanel vPanel = new VerticalPanel();
	
	public StudentDashboard() {
		initWidget(this.vPanel);
		
		Label titleLabel = new Label("Dashboard Studente");
		Image logoImage = new Image();
		StudentMenuComponent studentMenu = new StudentMenuComponent();
		
		logoImage.setUrl("https://cdn.pixabay.com/photo/2016/11/22/06/05/girl-1848454_960_720.jpg");
		logoImage.setWidth("50%");
		
		this.vPanel.add(titleLabel);
		this.vPanel.add(logoImage);
		this.vPanel.add(studentMenu);
	}
	
	
}
