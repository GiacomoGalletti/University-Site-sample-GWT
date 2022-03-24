package com.google.gwt.sample.stockwatcher.client;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HorizontalPanel;

public class MenuComponent extends Composite {
	private HorizontalPanel hPanel = new HorizontalPanel();
	private MainPage main;
	
	public MenuComponent(MainPage main) {
		initWidget(this.hPanel);
		this.main = main;
		
		Button buttonLogin = new Button("login");
		Button buttonHome = new Button("home");
		
		buttonLogin.setWidth("250px");
		buttonHome.setWidth("250px");
		
		buttonLogin.addClickHandler(new buttonLoginHandler());
		buttonHome.addClickHandler(new buttonHomeHandler());
		
		this.hPanel.add(buttonHome);
		this.hPanel.add(buttonLogin);
	}
	
	private class buttonLoginHandler implements ClickHandler{

		@Override
		public void onClick(ClickEvent event) {
			// TODO Auto-generated method stub
			main.openLoginPage();
		}
		
	}
	
	private class buttonHomeHandler implements ClickHandler{

		@Override
		public void onClick(ClickEvent event) {
			// TODO Auto-generated method stub
			main.openHomePage();
		}
		
	}
}
