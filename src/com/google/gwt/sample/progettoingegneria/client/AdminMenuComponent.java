package com.google.gwt.sample.progettoingegneria.client;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.VerticalPanel;

public class AdminMenuComponent extends Composite{
	private VerticalPanel vPanel = new VerticalPanel();
	private ListBox actionsListBox = new ListBox();
	private Button confirmButton = new Button("Conferma");
	private AdminSettingComponent adminSettingComp = new AdminSettingComponent();
	
	public AdminMenuComponent() {
		initWidget(this.vPanel);
		
		actionsListBox.addItem("crea nuovo account");
		actionsListBox.addItem("gestisci info studenti");
		actionsListBox.addItem("gestisci info docenti");
		actionsListBox.setVisibleItemCount(3);
		confirmButton.setWidth("200px");
		confirmButton.addClickHandler(new buttonConfirmHandler());
		
		this.vPanel.add(actionsListBox);
		this.vPanel.add(confirmButton);
		this.vPanel.add(adminSettingComp);
		
	}
	
	private class buttonConfirmHandler implements ClickHandler{

		@Override
		public void onClick(ClickEvent event) {
			
			int userchoice = actionsListBox.getSelectedIndex();
			switch(userchoice) {
			case -1:
				
				break;
			case 0:
				adminSettingComp.showUserSignUp();
				break;
			case 1:
				adminSettingComp.manageStudent();
				break;
			case 2:
				adminSettingComp.manageProfessor();
				break;
			}
		}
	}
	

}
