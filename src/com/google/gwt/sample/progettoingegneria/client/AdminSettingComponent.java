package com.google.gwt.sample.progettoingegneria.client;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;

public class AdminSettingComponent extends Composite {
	private VerticalPanel vPanel = new VerticalPanel();
	private VerticalPanel signUpPanel = new VerticalPanel();
	private VerticalPanel infoPanel = new VerticalPanel();
	
	//components signUpPanel
	private TextBox usernameTB = new TextBox();
	private TextBox mailTB = new TextBox();
	private TextBox passwordTB = new TextBox();
	private TextBox nameTB = new TextBox();
	private TextBox surnameTB = new TextBox();
	private ListBox typeListBox = new ListBox();
	private Button confirmSignUpButton = new Button("Registra");
	
	//components infoPanel
	private TextArea txta = new TextArea();
	
	public AdminSettingComponent() {
		initWidget(this.vPanel);
		
		this.vPanel.add(signUpPanel);
		this.vPanel.add(infoPanel);
		

		signUpPanel.add(new Label("username"));
		signUpPanel.add(usernameTB);
		signUpPanel.add(new Label("pssw"));
		signUpPanel.add(passwordTB);
		signUpPanel.add(new Label("mail"));
		signUpPanel.add(mailTB);
		signUpPanel.add(new Label("nome"));
		signUpPanel.add(nameTB);
		signUpPanel.add(new Label("cognome"));
		signUpPanel.add(surnameTB);
		typeListBox.addItem("Studente");
		typeListBox.addItem("Professore");
		typeListBox.addItem("Segreteria");
		signUpPanel.add(typeListBox);
		signUpPanel.add(confirmSignUpButton);
		confirmSignUpButton.addClickHandler(new confirmSignUpButtonHandler());
		
		infoPanel.add(txta);
		txta.setWidth("500px");
		
		signUpPanel.setVisible(false);
		infoPanel.setVisible(false);
	}
	
	public void hidePanels() {
		signUpPanel.setVisible(false);
		infoPanel.setVisible(false);
	}
	
	public void manageProfessor() {
		hidePanels();
		ConnServiceSingleton.getConnService().viewProfessorInfo(new AsyncCallback<String>() {

			@Override
			public void onFailure(Throwable caught) {
				Window.alert("ERROR: " + caught);
			}

			@Override
			public void onSuccess(String result) {
				txta.setText(result);
				
			}					
		});
		infoPanel.setVisible(true);
	}
	
	public void manageStudent() {
		hidePanels();
		ConnServiceSingleton.getConnService().viewStudentInfo(new AsyncCallback<String>() {

			@Override
			public void onFailure(Throwable caught) {
				Window.alert("ERROR: " + caught);
			}

			@Override
			public void onSuccess(String result) {
				txta.setText(result);
				
			}					
		});
		infoPanel.setVisible(true);
	}
	
	public void showUserSignUp() {
		hidePanels();
		signUpPanel.setVisible(true);
	}
	
	private class confirmSignUpButtonHandler implements ClickHandler{

		@Override
		public void onClick(ClickEvent event) {
			String user = usernameTB.getText();
			String psw = passwordTB.getText();
			String mail = mailTB.getText();
			String name = nameTB.getText();
			String surname = surnameTB.getText();
			int type = typeListBox.getSelectedIndex();
			
			ConnServiceSingleton.getConnService().signUp(user, psw, mail, name, surname, type, new AsyncCallback<String>() {

				@Override
				public void onFailure(Throwable caught) {
					Window.alert("ERROR: " + caught);
				}

				@Override
				public void onSuccess(String result) {
					Window.alert("Risultato: "+result);
					
				}					
			});
		}
		
	}
}
