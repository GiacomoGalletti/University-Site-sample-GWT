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
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;

public class LoginPage extends Composite{
	
	private VerticalPanel mainPanel = new VerticalPanel();
	private Image image1 = new Image();
	private MainPage main;
	private ConnServiceAsync connService = GWT.create(ConnService.class);
	private TextBox emailTextBox = new TextBox();
    private TextBox passwordTextBox = new TextBox();
	private Button loginButton = new Button("Accedi");;
	
	public LoginPage(MainPage main) {
		this.main = main;
		initWidget(this.mainPanel);
		
		Label titleLabel = new Label("Accedi");
		Label credentialsLabel = new Label("Credenziali di accesso:");
		Label emailLabel = new Label("email: ");
		Label passwordLabel = new Label("password:");
		VerticalPanel vpanel1 = new VerticalPanel();
		VerticalPanel vpanel2 = new VerticalPanel();
		HorizontalPanel hpanel = new HorizontalPanel();


	    
	    image1.setUrl("https://cdn.pixabay.com/photo/2018/10/02/11/13/girl-3718537_960_720.jpg");
		loginButton.addClickHandler(new loginButtonHandler());
		
		mainPanel.add(titleLabel);
		mainPanel.add(credentialsLabel);
		vpanel1.add(emailLabel);
		vpanel1.add(passwordLabel);
		vpanel2.add(emailTextBox);
		vpanel2.add(passwordTextBox);
		hpanel.add(vpanel1);
		hpanel.add(vpanel2);
		mainPanel.add(hpanel);
		mainPanel.add(loginButton);
		mainPanel.add(image1);
	}
	
	private class loginButtonHandler implements ClickHandler {

		@Override
		public void onClick(ClickEvent event) {
			String user = emailTextBox.getText();
			String passw = passwordTextBox.getText();
			
			connService.loginRequest(user, passw,new AsyncCallback<State>() {
				@Override
				public void onFailure(Throwable caught) {
					Window.alert("Cannot access: "
							+ caught.getMessage());
				}

				@Override
				public void onSuccess(State result) {
						switch(result) {
						case WRONG_PASSWORD:
							Window.alert("password errata");
							break;
						case STUDENT: // Student
							Session.getSession().setTipo(State.STUDENT);
							main.openStudentDashboard();
							break;
						case PROFESSOR: // Professor
							Session.getSession().setTipo(State.PROFESSOR);
							main.openProfessorDashboard();
							break;
						case SECRETARY: //Secretary
							Session.getSession().setTipo(State.SECRETARY);
							main.openSecretaryDashboard();
							break;
						case ADMIN: // Admin
							main.menu.setLogged(true);
							main.menu.setLoginText();
							Session.getSession().setTipo(State.ADMIN);
							main.openAdminDashboard();
							break;
						default:
							Window.alert("Account non trovato");
							break;
						}
					
				}
			});
			
		}	
	}
}
