package com.google.gwt.sample.progettoingegneria.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.sample.progettoingegneria.shared.State;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;

public class MenuComponent extends Composite {
	private HorizontalPanel hPanel = new HorizontalPanel();
	private MainPage main;
	private ConnServiceAsync connService = GWT.create(ConnService.class);
	private Button buttonLogin;
	private Label sessionLabel;
	
	public MenuComponent(MainPage main) {
		initWidget(this.hPanel);
		this.main = main;
		
		this.sessionLabel = new Label("Sessione: " + Session.getSession().getTipo());
		
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
		this.hPanel.add(sessionLabel);
	}
	
	/*
	 * metodo per modificare il comportamento e l'aspetto del pulsante login/logout (buttonLogin)
	 * */
	public void setSessionToLogout() {
		Session.getSession().setTipo(State.NOT_SIGNED);
		main.openHomePage();
	}
	
	private boolean logged = false;
	
	public void setLogged(boolean val) {
		logged = val;
	}
	
	public void setLoginText() {
		if (logged) {buttonLogin.setText("logout");}
		else {buttonLogin.setText("login");}
	}
	
	private class buttonLoginHandler implements ClickHandler{
		
		private void openLoginTemplate() {
				buttonLogin.setText("login");
				main.openLoginPage();
		}

		@Override
		public void onClick(ClickEvent event) {
				switch(Session.getSession().getTipo()) {
						case NOT_SIGNED:
							openLoginTemplate();
							break;
						case STUDENT:
							main.openStudentDashboard();
							break;
						case PROFESSOR:
							main.openProfessorDashboard();
							break;
						case SECRETARY:
							main.openSecretaryDashboard();
							break;
						case ADMIN:
							main.openAdminDashboard();
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
