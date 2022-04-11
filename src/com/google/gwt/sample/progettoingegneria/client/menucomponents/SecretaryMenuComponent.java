package com.google.gwt.sample.progettoingegneria.client.menucomponents;

import com.google.gwt.event.dom.client.DoubleClickEvent;
import com.google.gwt.event.dom.client.DoubleClickHandler;
import com.google.gwt.sample.progettoingegneria.client.dashboards.settings.ApproveGradesComponent;
import com.google.gwt.sample.progettoingegneria.client.dashboards.settings.InfoStudentListComponent;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.VerticalPanel;

public class SecretaryMenuComponent extends Composite{
	private VerticalPanel vPanel = new VerticalPanel();
	private ListBox actionsListBox = new ListBox();
	
	private InfoStudentListComponent infoStudentView = new InfoStudentListComponent();
	private ApproveGradesComponent approveGradesView = new ApproveGradesComponent();
	
	public SecretaryMenuComponent() {
		initWidget(this.vPanel);
		
		actionsListBox.addItem("visualizza i dati degli studenti");
		actionsListBox.addItem("pubblica voti esame");
		actionsListBox.setVisibleItemCount(3);
		actionsListBox.addDoubleClickHandler(new actionsListBoxHandler());
		
		this.vPanel.add(actionsListBox);
	}
	
	private class actionsListBoxHandler implements DoubleClickHandler{

		@Override
		public void onDoubleClick(DoubleClickEvent event) {
			clearPanel();
			int userchoice = actionsListBox.getSelectedIndex();
			switch(userchoice) {
			case 0:
				vPanel.add(infoStudentView);
				break;
			case 1:
				vPanel.add(approveGradesView);
				break;

			}
		}
	}
	
	private void clearPanel() {
		vPanel.remove(infoStudentView);
	}
}