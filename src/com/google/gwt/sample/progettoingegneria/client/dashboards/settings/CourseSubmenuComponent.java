package com.google.gwt.sample.progettoingegneria.client.dashboards.settings;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.VerticalPanel;

/**
 * componente che non trovo dove sia richiamato
 * 
 */

public class CourseSubmenuComponent extends Composite{
	private VerticalPanel vPanel = new VerticalPanel();

	private ListBox actionsListBox = new ListBox();
	private Button selectionButton = new Button("Conferma");

	private ProfessorCourseCreationComponent courseComponent;
	private ProfessorCoursesListComponent queryComponent;
	
	public CourseSubmenuComponent() {
		initWidget(this.vPanel);

		actionsListBox.addItem("crea corso");
		actionsListBox.addItem("modifica corso");
		actionsListBox.setVisibleItemCount(2);
		selectionButton.addClickHandler(new selectionButtonHandler());
		vPanel.add(actionsListBox);
		vPanel.add(selectionButton);
	}
	
	private class selectionButtonHandler implements ClickHandler {

		@Override
		public void onClick(ClickEvent event) {
			int userchoice = actionsListBox.getSelectedIndex();
			switch(userchoice) {
			case 0:
				courseComponent = new ProfessorCourseCreationComponent();
				vPanel.add(courseComponent.asWidget());				
				break;
			case 1:
				queryComponent = new ProfessorCoursesListComponent();
				vPanel.add(queryComponent.asWidget());
				break;

			}
		}
		
	}
	
}
