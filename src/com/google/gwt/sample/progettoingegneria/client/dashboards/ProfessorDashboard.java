package com.google.gwt.sample.progettoingegneria.client.dashboards;

import com.google.gwt.sample.progettoingegneria.client.Session;
import com.google.gwt.sample.progettoingegneria.client.menucomponents.ProfessorMenuComponent;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.VerticalPanel;

public class ProfessorDashboard extends Composite {
	private VerticalPanel vPanel = new VerticalPanel();
	
	public ProfessorDashboard() {
		initWidget(this.vPanel);
		
		Label titleLabel = new Label("Dashboard Professore: "+Session.getSession().getEmail());
		Image logoImage = new Image();
		ProfessorMenuComponent profmenu = new ProfessorMenuComponent();
		
		logoImage.setUrl("https://cdn.pixabay.com/photo/2021/08/22/13/43/teacher-6565166_960_720.png");
		logoImage.setWidth("50%");
		
		this.vPanel.add(titleLabel);
		this.vPanel.add(logoImage);
		this.vPanel.add(profmenu);
	}
}
