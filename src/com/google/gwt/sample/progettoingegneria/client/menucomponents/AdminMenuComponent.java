package com.google.gwt.sample.progettoingegneria.client.menucomponents;

import com.google.gwt.event.dom.client.DoubleClickEvent;
import com.google.gwt.event.dom.client.DoubleClickHandler;
import com.google.gwt.sample.progettoingegneria.client.dashboards.settings.AdminCreateUserComponent;
import com.google.gwt.sample.progettoingegneria.client.dashboards.settings.AdminUsersListComponent;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.VerticalPanel;

public class AdminMenuComponent extends Composite{
	private VerticalPanel vPanel = new VerticalPanel();
	private ListBox actionsListBox = new ListBox();
	private AdminCreateUserComponent adminCreateUserComp = new AdminCreateUserComponent();
	//private AdminUsersListComponent userListComp = new AdminUsersListComponent();
	
	public AdminMenuComponent() {
		initWidget(this.vPanel);
		actionsListBox.addItem("crea nuovo account");
		actionsListBox.addItem("gestisci info studenti");
		actionsListBox.addItem("gestisci info docenti");
		actionsListBox.addItem("gestisci info segreteria");
		actionsListBox.setVisibleItemCount(4);
		actionsListBox.addDoubleClickHandler(new actionsListBoxHandler());
		this.vPanel.add(actionsListBox);
	}
	
	private class actionsListBoxHandler implements DoubleClickHandler{

		@Override
		public void onDoubleClick(DoubleClickEvent event) {
			
			int userchoice = actionsListBox.getSelectedIndex();
			switch(userchoice) {
			case 0:
				vPanel.add(adminCreateUserComp);
				break;
			case 1:
				//vPanel.add(userListComp);
				break;
			case 2:
				//vPanel.add(userListComp);
				break;
			}
		}
	}
	

}
