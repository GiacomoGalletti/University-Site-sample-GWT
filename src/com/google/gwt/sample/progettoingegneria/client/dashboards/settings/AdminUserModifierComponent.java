package com.google.gwt.sample.progettoingegneria.client.dashboards.settings;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.sample.progettoingegneria.client.ConnServiceSingleton;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;

/**
 * 
 * Classe che visualizza e modifica i dati del singolo utente selezionato
 *	nel pannello precedente @AdminStudentsListComponent oppure @AdminProfessorsListComponent
 */

public class AdminUserModifierComponent extends Composite {
	private VerticalPanel vPanel = new VerticalPanel();

	private Label emailLb = new Label();
	private TextBox nameTb = new TextBox();
	private TextBox surnameTb = new TextBox();
	private TextBox userNameTb = new TextBox();
	private TextBox passwordTb = new TextBox();
	
	private Button confirmBtn = new Button("Conferma Modifiche");
	private String[] user;
	
	public AdminUserModifierComponent(String[] user) {
		this.user = user;
		initWidget(this.vPanel);
		emailLb.setText(this.user[1]);
		nameTb.setText(this.user[3]);
		surnameTb.setText(this.user[5]);
		userNameTb.setText(this.user[7]);
		passwordTb.setText(this.user[9]);
		
		vPanel.add(new Label("MODIFICA USER"));
		vPanel.add(new Label("Email:"));
		vPanel.add(emailLb);
		vPanel.add(new Label("Nome:"));
		vPanel.add(nameTb);
		vPanel.add(new Label("Cognome:"));
		vPanel.add(surnameTb);
		vPanel.add(new Label("Username:"));
		vPanel.add(userNameTb);
		vPanel.add(new Label("Password:"));
		vPanel.add(passwordTb);
		vPanel.add(confirmBtn);
		confirmBtn.addClickHandler(new confirmBtnHandler());
	}
	
	private class confirmBtnHandler implements  ClickHandler {
		@Override
		public void onClick(ClickEvent event) {
			ConnServiceSingleton.getConnService().setUserInfo(
					user[1], 
					nameTb.getText(), 
					surnameTb.getText(), 
					userNameTb.getText(), 
					passwordTb.getText(), 
					new AsyncCallback<Boolean>() {

						@Override
						public void onFailure(Throwable caught) {
							Window.alert("Errore del server. Dati non aggiornati.");
						}

						@Override
						public void onSuccess(Boolean result) {
							Window.alert("Dati aggiornati.");
						}
						
					});
		}
	}
}
