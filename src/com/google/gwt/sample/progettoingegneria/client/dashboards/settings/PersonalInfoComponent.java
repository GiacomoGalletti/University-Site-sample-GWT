package com.google.gwt.sample.progettoingegneria.client.dashboards.settings;

import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.user.client.ui.VerticalPanel;

/*
 * classe che contiene le informazioni personali dell'utente sia
 * che esso sia un prof, che uno studente, che un admin
 */

public class PersonalInfoComponent extends Composite{
	private VerticalPanel vPanel = new VerticalPanel();
	private Label label1 = new Label("le tue info personali");
	private TextArea txta1 = new TextArea();
	
	
	public PersonalInfoComponent() {
		initWidget(this.vPanel);
		
		this.vPanel.add(label1);
		this.vPanel.add(txta1);
		
		txta1.setWidth("200px");
		txta1.setHeight("150px");
		
		retrieveUserInfo();
	}
	
	public void retrieveUserInfo() {
		//metodo che prende le info dello user che ha la sessione attiva
		//e popola txta1
	}
	
	
}
