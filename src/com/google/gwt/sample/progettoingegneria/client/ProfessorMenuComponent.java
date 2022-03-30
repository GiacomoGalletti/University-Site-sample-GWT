package com.google.gwt.sample.progettoingegneria.client;

/*
 * TODO: aggiungere i controlli sulla validità delle date inserite
 */

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.VerticalPanel;

public class ProfessorMenuComponent extends Composite {
	private VerticalPanel vPanel = new VerticalPanel();
	private ListBox actionsListBox = new ListBox();
	private Button confirmButton = new Button("Conferma");
	
	
	private CourseManagementComponent courseComponent = new CourseManagementComponent();
	
	public ProfessorMenuComponent() {
		initWidget(this.vPanel);
		
		actionsListBox.addItem("gestisci corsi");
		actionsListBox.addItem("gestisci esami");
		actionsListBox.addItem("invia voti esami");
		actionsListBox.addItem("visualizza informazioni personali");
		actionsListBox.setVisibleItemCount(4);
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
				vPanel.add(courseComponent.asWidget());				
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
