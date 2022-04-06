package com.google.gwt.sample.progettoingegneria.client.menucomponents;


import com.google.gwt.event.dom.client.DoubleClickEvent;
import com.google.gwt.event.dom.client.DoubleClickHandler;
import com.google.gwt.sample.progettoingegneria.client.dashboards.settings.ProfessorCoursesListComponent;
import com.google.gwt.sample.progettoingegneria.client.dashboards.settings.ProfessorExamCreationComponent;
import com.google.gwt.sample.progettoingegneria.client.dashboards.settings.PersonalInfoComponent;
import com.google.gwt.sample.progettoingegneria.client.dashboards.settings.SendGradesComponent;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.ListBox;

public class ProfessorMenuComponent extends Composite {
	private HorizontalPanel hPanel = new HorizontalPanel();
	private ListBox actionsListBox = new ListBox();
	
	private ProfessorCoursesListComponent courseQuaryList = new ProfessorCoursesListComponent();
	private PersonalInfoComponent infoView = new PersonalInfoComponent();
	private SendGradesComponent sendGradesView = new SendGradesComponent();
	private ProfessorExamCreationComponent professorExamCreationView = new ProfessorExamCreationComponent();
	
	public ProfessorMenuComponent() {
		initWidget(this.hPanel);
		actionsListBox.addDoubleClickHandler(new ListBoxHandler());
		actionsListBox.addItem("gestisci corsi");
		actionsListBox.addItem("crea esame");
		actionsListBox.addItem("invia voti esami");
		actionsListBox.addItem("visualizza informazioni personali");
		actionsListBox.setVisibleItemCount(4);
		this.hPanel.add(actionsListBox);
	}
	
	private class ListBoxHandler implements DoubleClickHandler{
		@Override
		public void onDoubleClick(DoubleClickEvent event) {
			cleanhPanel();
			int userchoice = actionsListBox.getSelectedIndex();
			switch(userchoice) {
			case 0:
				hPanel.add(courseQuaryList);				
				break;
			case 1:
				hPanel.add(professorExamCreationView);
				break;
			case 2:
				hPanel.add(sendGradesView);
				break;
			case 3:
				hPanel.add(infoView);
				break;
			}
		}

	}
	
	private void cleanhPanel() {
		hPanel.remove(courseQuaryList);	
		hPanel.remove(sendGradesView);
		hPanel.remove(infoView);
		hPanel.remove(professorExamCreationView);
	}
}
