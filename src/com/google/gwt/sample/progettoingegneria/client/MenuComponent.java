package com.google.gwt.sample.progettoingegneria.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.TextBox;

public class MenuComponent extends Composite {
	private HorizontalPanel hPanel = new HorizontalPanel();
	private MainPage main;
	private ConnServiceAsync connService = GWT.create(ConnService.class);
	
	public MenuComponent(MainPage main) {
		initWidget(this.hPanel);
		this.main = main;
		
		Button buttonLogin = new Button("login");
		Button buttonHome = new Button("home");
		Button buttonClear = new Button("pulisci db");
		
		buttonLogin.setWidth("250px");
		buttonHome.setWidth("250px");
		
		buttonLogin.addClickHandler(new buttonLoginHandler());
		buttonHome.addClickHandler(new buttonHomeHandler());
		buttonClear.addClickHandler(new buttonClearHandler());
		
		this.hPanel.add(buttonHome);
		this.hPanel.add(buttonLogin);
		this.hPanel.add(buttonClear);

	}
	
	private class buttonLoginHandler implements ClickHandler{

		@Override
		public void onClick(ClickEvent event) {
			main.openLoginPage();
		}
		
	}
	
	private class buttonHomeHandler implements ClickHandler{

		@Override
		public void onClick(ClickEvent event) {
			main.openHomePage();
		}
		
	}
	
	private class buttonClearHandler implements ClickHandler{

		@Override
		public void onClick(ClickEvent event) {
			connService.clearDB(new AsyncCallback<String>() {

				@Override
				public void onFailure(Throwable caught) {
					Window.alert("ERROR: " + caught);
				}

				@Override
				public void onSuccess(String result) {
					Window.alert(result);
					
				}					
			});
		}
		
	}
		
	
}
