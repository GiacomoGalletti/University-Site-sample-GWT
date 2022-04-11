package com.google.gwt.sample.progettoingegneria.client.menucomponents;


import com.google.gwt.event.dom.client.DoubleClickEvent;
import com.google.gwt.event.dom.client.DoubleClickHandler;
import com.google.gwt.sample.progettoingegneria.client.dashboards.settings.ProfessorCoursesListComponent;
import com.google.gwt.sample.progettoingegneria.client.dashboards.settings.ProfessorExamCreationComponent;
import com.google.gwt.sample.progettoingegneria.client.Session;
import com.google.gwt.sample.progettoingegneria.client.dashboards.settings.PersonalInfoComponent;
import com.google.gwt.sample.progettoingegneria.client.dashboards.settings.SendGradesComponent;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.VerticalPanel;

public class ProfessorMenuComponent extends Composite {
	private HorizontalPanel basePanel = new HorizontalPanel();
	private VerticalPanel vPanel = new VerticalPanel();
	private ListBox actionsListBox = new ListBox();
	
	private ProfessorCoursesListComponent courseQuaryList;
	private PersonalInfoComponent infoView;
	private SendGradesComponent sendGradesView;
	
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
				Session.getSession().setNavIndex(0);
				courseQuaryList = new ProfessorCoursesListComponent();
				vPanel.add(courseQuaryList);				
				break;
			case 1:
				Session.getSession().setNavIndex(1);
				courseQuaryList = new ProfessorCoursesListComponent();
				vPanel.add(courseQuaryList);
				break;
			case 2:
				sendGradesView = new SendGradesComponent();
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
