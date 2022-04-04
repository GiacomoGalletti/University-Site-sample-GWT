package com.google.gwt.sample.progettoingegneria.client.dashboards;

import com.google.gwt.sample.progettoingegneria.client.AdminMenuComponent;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.VerticalPanel;

public class AdminDashboard extends Composite{
	private VerticalPanel vPanel = new VerticalPanel();
	
	public AdminDashboard() {
		initWidget(this.vPanel);
		
		Label titleLabel = new Label("Università di Giacky");
		Image logoImage = new Image();
		AdminMenuComponent adminMenu = new AdminMenuComponent();
		
		logoImage.setUrl("https://cdn.pixabay.com/photo/2016/11/22/06/05/girl-1848454_960_720.jpg");
		logoImage.setWidth("50%");
		
		this.vPanel.add(titleLabel);
		this.vPanel.add(logoImage);
		this.vPanel.add(adminMenu);
	}
}
