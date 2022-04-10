package com.google.gwt.sample.progettoingegneria.client;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.sample.progettoingegneria.shared.UserState;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HorizontalPanel;

public class MenuComponent extends Composite {
	private HorizontalPanel hPanel = new HorizontalPanel();
	private MainPage main;
	private Button buttonLogin;
	
	public MenuComponent(MainPage main) {
		initWidget(this.hPanel);
		this.main = main;
		buttonLogin = new Button("Area Utente");
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
	
	
	//metodo per effettuare il logout 
	
	public void setSessionToLogout() {
		if(Session.getSession().getTipo()!=UserState.NOT_SIGNED && (buttonLogin.getText()=="logout")) {
			Session.getSession().setSession(UserState.NOT_SIGNED,null);
			main.openHomePage();
		}
	}
	
	/*
	 * metodo per modificare il comportamento e l'aspetto del pulsante login/logout (buttonLogin)
	 * */
	public void setLoginText() {
		if (Session.getSession().getTipo()!=UserState.NOT_SIGNED) {buttonLogin.setText("logout");}
		else {buttonLogin.setText("login");}
	}
	
	private class buttonLoginHandler implements ClickHandler{
		
		private void openLoginTemplate() {
				buttonLogin.setText("login");
				main.openLoginPage();
		}

		@Override
		public void onClick(ClickEvent event) {
			setSessionToLogout();
			
				switch(Session.getSession().getTipo()) {
						case NOT_SIGNED:
							openLoginTemplate();
							setLoginText();
							break;
						case STUDENT:
							main.openStudentDashboard();
							setLoginText();
							break;
						case PROFESSOR:
							main.openProfessorDashboard();
							setLoginText();
							break;
						case SECRETARY:
							main.openSecretaryDashboard();
							setLoginText();
							break;
						case ADMIN:
							main.openAdminDashboard();
							setLoginText();
							break;
						default:
							break;
				}
		}
		
	}
	
	private class buttonHomeHandler implements ClickHandler{

		@Override
		public void onClick(ClickEvent event) {
			main.openHomePage();
			buttonLogin.setText("Area Utente");
		}
		
	}
	
	private class buttonClearHandler implements ClickHandler{

		@Override
		public void onClick(ClickEvent event) {
			ConnServiceSingleton.getConnService().clearDB(new AsyncCallback<String>() {

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
