package com.google.gwt.sample.progettoingegneria.client.menucomponents;

import com.google.gwt.event.dom.client.DoubleClickEvent;
import com.google.gwt.event.dom.client.DoubleClickHandler;
import com.google.gwt.sample.progettoingegneria.client.dashboards.settings.AdminCreateUserComponent;
import com.google.gwt.sample.progettoingegneria.client.dashboards.settings.AdminProfessorsListComponent;
import com.google.gwt.sample.progettoingegneria.client.dashboards.settings.AdminStudentsListComponent;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.VerticalPanel;

public class AdminMenuComponent extends Composite{
	private HorizontalPanel baseVPanel = new HorizontalPanel();
	private ListBox actionsListBox = new ListBox();
	private AdminCreateUserComponent adminCreateUserComp = new AdminCreateUserComponent();
	private AdminStudentsListComponent studentsListComp = new AdminStudentsListComponent();
	private AdminProfessorsListComponent professorsListComp = new AdminProfessorsListComponent();
	
	public AdminMenuComponent() {
		initWidget(this.baseVPanel);
		actionsListBox.addItem("crea nuovo account");
		actionsListBox.addItem("gestisci info studenti");
		actionsListBox.addItem("gestisci info docenti");
		actionsListBox.setVisibleItemCount(3);
		actionsListBox.addDoubleClickHandler(new actionsListBoxHandler());
		this.baseVPanel.add(actionsListBox);
	}
	
	private class actionsListBoxHandler implements DoubleClickHandler{

		@Override
		public void onDoubleClick(DoubleClickEvent event) {
			cleanhPanel();
			int userchoice = actionsListBox.getSelectedIndex();
			switch(userchoice) {
			case 0: 
				baseVPanel.add(adminCreateUserComp);
				break;
			case 1: 
				baseVPanel.add(studentsListComp);
				break;
			case 2: 
				baseVPanel.add(professorsListComp);
				break;
			}
		}
	}
	
	private void cleanhPanel() {
		baseVPanel.remove(adminCreateUserComp);	
		baseVPanel.remove(studentsListComp);
		baseVPanel.remove(professorsListComp);

	}
	

}
