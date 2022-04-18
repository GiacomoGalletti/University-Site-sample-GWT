package com.google.gwt.sample.progettoingegneria.client.menucomponents;


import com.google.gwt.event.dom.client.DoubleClickEvent;
import com.google.gwt.event.dom.client.DoubleClickHandler;
import com.google.gwt.sample.progettoingegneria.client.dashboards.settings.ProfessorListCoursesComponent;
import com.google.gwt.sample.progettoingegneria.client.dashboards.settings.ProfessorListExamsComponent;
import com.google.gwt.sample.progettoingegneria.client.dashboards.settings.PersonalInfoComponent;
import com.google.gwt.sample.progettoingegneria.client.dashboards.settings.ProfessorSendGradesComponent;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.VerticalPanel;

public class ProfessorMenuComponent extends Composite {
	private HorizontalPanel basePanel = new HorizontalPanel();
	private VerticalPanel vPanel = new VerticalPanel();
	private ListBox actionsListBox = new ListBox();
	
	private PersonalInfoComponent infoView;
	private ProfessorSendGradesComponent sendGradesView;
	
	public ProfessorMenuComponent() {
		initWidget(this.basePanel);
		actionsListBox.addDoubleClickHandler(new ListBoxHandler());
		actionsListBox.addItem("gestisci corsi");
		actionsListBox.addItem("gestisci esame");
		actionsListBox.addItem("invia voti esami");
		actionsListBox.addItem("visualizza informazioni personali");
		actionsListBox.setVisibleItemCount(4);
		this.basePanel.add(actionsListBox);
		this.basePanel.add(vPanel);

	}
	
	private class ListBoxHandler implements DoubleClickHandler{
		@Override
		public void onDoubleClick(DoubleClickEvent event) {
			cleanhPanel();
			int userchoice = actionsListBox.getSelectedIndex();
			switch(userchoice) {
			case 0:
				ProfessorListCoursesComponent courseList = new ProfessorListCoursesComponent();
				vPanel.add(courseList);				
				break;
			case 1:
				ProfessorListExamsComponent examList = new ProfessorListExamsComponent();
				vPanel.add(examList);
				break;
			case 2:
				sendGradesView = new ProfessorSendGradesComponent();
				vPanel.add(sendGradesView);
				break;
			case 3:
				infoView = new PersonalInfoComponent();
				vPanel.add(infoView);
				break;
			}
		}

	}
	
	private void cleanhPanel() {
		vPanel.clear();
	}
}
