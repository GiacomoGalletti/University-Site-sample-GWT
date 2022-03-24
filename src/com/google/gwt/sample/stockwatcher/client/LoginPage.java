package com.google.gwt.sample.stockwatcher.client;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;

public class LoginPage extends Composite{
	
	private VerticalPanel mainPanel = new VerticalPanel();
	private Image image1 = new Image();
	private MainPage main;
	
	public LoginPage(MainPage main) {
		this.main = main;
		initWidget(this.mainPanel);
		
		Label titleLabel = new Label("Accedi");
		Label credentialsLabel = new Label("Credenziali di accesso:");
	    TextBox usernameTextBox = new TextBox();
	    TextBox passwordTextBox = new TextBox();
	    Button loginButtonS = new Button("Accedi come studente");
	    Button loginButtonP = new Button("Accedi come docente");
	    Button loginButtonSe = new Button("Accedi come segreteria");
	    Button loginButtonA = new Button("Accedi come amministratore");
	    
	    image1.setUrl("https://cdn.pixabay.com/photo/2018/10/02/11/13/girl-3718537_960_720.jpg");
		loginButtonS.addClickHandler(new buttonStudentHandler());
		loginButtonP.addClickHandler(new buttonProfessorHandler());
		loginButtonSe.addClickHandler(new buttonSecretaryHandler());
		loginButtonA.addClickHandler(new buttonAdminHandler());
		
		mainPanel.add(titleLabel);
		mainPanel.add(credentialsLabel);
		mainPanel.add(usernameTextBox);
		mainPanel.add(passwordTextBox);
		mainPanel.add(loginButtonS);
		mainPanel.add(loginButtonP);
		mainPanel.add(loginButtonSe);
		mainPanel.add(loginButtonA);
		mainPanel.add(image1);
	}
	
	private class buttonStudentHandler implements ClickHandler{

		@Override
		public void onClick(ClickEvent event) {
			// TODO Auto-generated method stub
			
			main.openStudentDashboard();
		}
		
	}
	
	private class buttonProfessorHandler implements ClickHandler{

		@Override
		public void onClick(ClickEvent event) {
			// TODO Auto-generated method stub
			
			main.openProfessorDashboard();
		}
		
	}
	
	private class buttonSecretaryHandler implements ClickHandler{

		@Override
		public void onClick(ClickEvent event) {
			// TODO Auto-generated method stub
			
			main.openSecretaryDashboard();
		}
		
	}
	
	private class buttonAdminHandler implements ClickHandler{

		@Override
		public void onClick(ClickEvent event) {
			// TODO Auto-generated method stub
			
			main.openAdminDashboard();
		}
		
	}

}
