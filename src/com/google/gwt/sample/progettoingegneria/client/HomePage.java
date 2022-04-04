package com.google.gwt.sample.progettoingegneria.client;

import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.VerticalPanel;

public class HomePage extends Composite {
	private VerticalPanel vPanel = new VerticalPanel();
	
	public HomePage() {
		initWidget(this.vPanel);
		
		Label titleLabel = new Label("Universita' di Giacky");
		Image logoImage = new Image();
		logoImage.setUrl("https://cdn.pixabay.com/photo/2018/03/01/14/48/woman-3190829_960_720.jpg");
		logoImage.setWidth("100%");
		
		this.vPanel.add(titleLabel);
		this.vPanel.add(logoImage);
	}
}
