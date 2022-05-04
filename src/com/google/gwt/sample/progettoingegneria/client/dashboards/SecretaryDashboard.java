package com.google.gwt.sample.progettoingegneria.client.dashboards;

import com.google.gwt.sample.progettoingegneria.client.Session;
import com.google.gwt.sample.progettoingegneria.client.menucomponents.SecretaryMenuComponent;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.VerticalPanel;

public class SecretaryDashboard extends Composite {
	private VerticalPanel vPanel = new VerticalPanel();
	
	public SecretaryDashboard() {
		initWidget(this.vPanel);
		
		Label titleLabel = new Label("Dashboard Segreteria: "+Session.getSession().getEmail());
		Image logoImage = new Image();
		SecretaryMenuComponent secretaryMenu = new SecretaryMenuComponent();
		
		logoImage.setUrl("https://cdn.pixabay.com/photo/2021/09/10/18/39/secretary-6613923_960_720.png");
		logoImage.setWidth("50%");
		
		this.vPanel.add(titleLabel);
		this.vPanel.add(logoImage);
		this.vPanel.add(secretaryMenu);
	}
}
