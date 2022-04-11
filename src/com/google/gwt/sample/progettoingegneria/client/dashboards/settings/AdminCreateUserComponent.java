package com.google.gwt.sample.progettoingegneria.client.dashboards.settings;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.sample.progettoingegneria.client.ConnServiceSingleton;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;

/**
 * componente che permette tutte le funzionalità
 * dell'amministratore
 * 
 */

public class AdminCreateUserComponent extends Composite {
	
	private VerticalPanel vPanel = new VerticalPanel();
	private VerticalPanel signUpPanel = new VerticalPanel();

	
	//components signUpPanel
	private TextBox usernameTB = new TextBox();
	private TextBox mailTB = new TextBox();
	private TextBox passwordTB = new TextBox();
	private TextBox nameTB = new TextBox();
	private TextBox surnameTB = new TextBox();
	private ListBox typeListBox = new ListBox();
	private Button confirmSignUpButton = new Button("Registra");

	public AdminCreateUserComponent() {
		initWidget(this.vPanel);
		
		this.vPanel.add(signUpPanel);
		

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
			
			ConnServiceSingleton.getConnService().signUp(
					user,
					psw, 
					mail, 
					name, 
					surname, 
					type, 
					new AsyncCallback<String>() {

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
