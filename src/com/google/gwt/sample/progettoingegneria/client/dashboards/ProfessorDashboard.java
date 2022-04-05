package com.google.gwt.sample.progettoingegneria.client.dashboards;

import com.google.gwt.sample.progettoingegneria.client.menucomponents.ProfessorMenuComponent;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.VerticalPanel;

public class ProfessorDashboard extends Composite {
	private VerticalPanel vPanel = new VerticalPanel();
	
	public ProfessorDashboard() {
		initWidget(this.vPanel);
		
		Label titleLabel = new Label("Università di Giacky");
		Image logoImage = new Image();
		ProfessorMenuComponent profmenu = new ProfessorMenuComponent();
		
		logoImage.setUrl("https://cdn.pixabay.com/photo/2020/08/04/08/10/woman-5462074_960_720.jpg");
		logoImage.setWidth("50%");
		
		this.vPanel.add(titleLabel);
		this.vPanel.add(logoImage);
		this.vPanel.add(profmenu);
	}
}
