package com.google.gwt.sample.stockwatcher.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.WindowScrollListener;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.TextBox;

public class MenuComponent extends Composite {
	private HorizontalPanel hPanel = new HorizontalPanel();
	private MainPage main;
	private TextBox tb = new TextBox();
	private StockPriceServiceAsync stockPriceSvc = GWT.create(StockPriceService.class);
	
	public MenuComponent(MainPage main) {
		initWidget(this.hPanel);
		this.main = main;
		
		Button buttonLogin = new Button("login");
		Button buttonHome = new Button("home");
		Button buttonTestCall = new Button("testCall");
		
		buttonLogin.setWidth("250px");
		buttonHome.setWidth("250px");
		
		buttonLogin.addClickHandler(new buttonLoginHandler());
		buttonHome.addClickHandler(new buttonHomeHandler());
		buttonTestCall.addClickHandler(new buttonTestHandler());
		
		this.hPanel.add(buttonHome);
		this.hPanel.add(buttonLogin);
		this.hPanel.add(buttonTestCall);
		this.hPanel.add(tb);

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
	
	private class buttonTestHandler implements ClickHandler{

		@Override
		public void onClick(ClickEvent event) {
				String input = tb.getText();
	
				stockPriceSvc.testCall(input, new AsyncCallback<String>() {
					@Override
					public void onFailure(Throwable caught) {
						Window.alert("Cannot load symbols: "
								+ caught.getMessage());
					}

					@Override
					public void onSuccess(String result) {
						Window.alert(result);
					}
				});
		}
		
	}	
		
	
}
