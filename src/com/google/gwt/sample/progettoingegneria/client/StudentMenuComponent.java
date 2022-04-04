package com.google.gwt.sample.progettoingegneria.client;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.VerticalPanel;

public class StudentMenuComponent extends Composite{
	private VerticalPanel vPanel = new VerticalPanel();
	private ListBox actionsListBox = new ListBox();
	private Button confirmButton = new Button("Conferma");
	
	public StudentMenuComponent() {
		initWidget(this.vPanel);
		
		actionsListBox.addItem("visualizza lista corsi disponibili");
		actionsListBox.addItem("iscriviti ad un corso");
		actionsListBox.addItem("registrati ad un esame");
		actionsListBox.addItem("visualizza le tue informazioni personali");
		actionsListBox.addItem("visualizza i tuoi voti");
		actionsListBox.setVisibleItemCount(5);
		confirmButton.setWidth("200px");
		confirmButton.addClickHandler(new buttonConfirmHandler());
		
		this.vPanel.add(actionsListBox);
		this.vPanel.add(confirmButton);
	}
	
	private class buttonConfirmHandler implements ClickHandler{

		@Override
		public void onClick(ClickEvent event) {
			int userchoice = actionsListBox.getSelectedIndex();
			switch(userchoice) {
			case -1:
				break;
			case 0:
				break;
			case 1:
				break;
			case 2:
				break;
			case 3:
				break;
			case 4:
				break;
			}
		}
	}
}
