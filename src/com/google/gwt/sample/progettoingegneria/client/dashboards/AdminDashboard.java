package com.google.gwt.sample.progettoingegneria.client.dashboards;

import com.google.gwt.sample.progettoingegneria.client.Session;
import com.google.gwt.sample.progettoingegneria.client.menucomponents.AdminMenuComponent;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.VerticalPanel;

public class AdminDashboard extends Composite{
	private VerticalPanel vPanel = new VerticalPanel();
	
	public AdminDashboard() {
		initWidget(this.vPanel);
		
		Label titleLabel = new Label("Dashboard Admin: "+Session.getSession().getEmail());
		Image logoImage = new Image();
		AdminMenuComponent adminMenu = new AdminMenuComponent();
		
		logoImage.setUrl("https://cdn.pixabay.com/photo/2017/03/28/12/10/chairs-2181951_960_720.jpg");
		logoImage.setWidth("50%");
		
		this.vPanel.add(titleLabel);
		this.vPanel.add(logoImage);
		this.vPanel.add(adminMenu);
	}
}
