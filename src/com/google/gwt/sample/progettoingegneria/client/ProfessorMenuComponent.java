package com.google.gwt.sample.progettoingegneria.client;


import com.google.gwt.event.dom.client.DoubleClickEvent;
import com.google.gwt.event.dom.client.DoubleClickHandler;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.ListBox;

public class ProfessorMenuComponent extends Composite {
	private HorizontalPanel vPanel = new HorizontalPanel();
	private ListBox actionsListBox = new ListBox();
	private CourseListComponent courseQuaryList = new CourseListComponent();	
	
	public ProfessorMenuComponent() {
		initWidget(this.vPanel);
		actionsListBox.addDoubleClickHandler(new ListBoxHandler());
		actionsListBox.addItem("gestisci corsi");
		actionsListBox.addItem("gestisci esami");
		actionsListBox.addItem("invia voti esami");
		actionsListBox.addItem("visualizza informazioni personali");
		actionsListBox.setVisibleItemCount(4);
		this.vPanel.add(actionsListBox);
	}
	
	private class ListBoxHandler implements DoubleClickHandler{
		@Override
		public void onDoubleClick(DoubleClickEvent event) {
			int userchoice = actionsListBox.getSelectedIndex();
			switch(userchoice) {
			case -1:
				break;
			case 0:
				vPanel.add(courseQuaryList.asWidget());				
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
