package com.google.gwt.sample.progettoingegneria.client.menucomponents;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.sample.progettoingegneria.client.dashboards.settings.InfoStudentListComponent;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.VerticalPanel;

public class SecretaryMenuComponent extends Composite{
	private VerticalPanel vPanel = new VerticalPanel();
	private ListBox actionsListBox = new ListBox();
	private Button confirmButton = new Button("Conferma");
	
	private InfoStudentListComponent infoStudentView = new InfoStudentListComponent();
	
	public SecretaryMenuComponent() {
		initWidget(this.vPanel);
		
		actionsListBox.addItem("visualizza i dati degli studenti");
		actionsListBox.addItem("inserisci voti d'esame");
		actionsListBox.addItem("pubblica voti esame");
		actionsListBox.setVisibleItemCount(3);
		confirmButton.setWidth("200px");
		confirmButton.addClickHandler(new buttonConfirmHandler());
		
		this.vPanel.add(actionsListBox);
		this.vPanel.add(confirmButton);
	}
	
	private class buttonConfirmHandler implements ClickHandler{

		@Override
		public void onClick(ClickEvent event) {
			clearPanel();
			int userchoice = actionsListBox.getSelectedIndex();
			switch(userchoice) {
			case 0:
				vPanel.add(infoStudentView);
				break;
			case 1:
				
				break;
			case 2:
				
				break;
			}
		}
	}
	
	private void clearPanel() {
		vPanel.remove(infoStudentView);
	}
}