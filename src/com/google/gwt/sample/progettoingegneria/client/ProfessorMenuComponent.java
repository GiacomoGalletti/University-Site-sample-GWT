package com.google.gwt.sample.progettoingegneria.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.sample.progettoingegneria.shared.Course;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.VerticalPanel;

public class ProfessorMenuComponent extends Composite {
	private VerticalPanel vPanel = new VerticalPanel();
	private ListBox actionsListBox = new ListBox();
	private Button confirmButton = new Button("Conferma");
	private ConnServiceAsync connService = GWT.create(ConnService.class);
	
	public ProfessorMenuComponent() {
		initWidget(this.vPanel);
		
		actionsListBox.addItem("gestisci corsi");
		actionsListBox.addItem("gestisci esami");
		actionsListBox.addItem("invia voti esami");
		actionsListBox.addItem("visualizza informazioni personali");
		actionsListBox.setVisibleItemCount(4);
		confirmButton.setWidth("200px");
		confirmButton.addClickHandler(new buttonConfirmHandler());
	
		this.vPanel.add(actionsListBox);
		this.vPanel.add(confirmButton);
	}
	
	private class buttonConfirmHandler implements ClickHandler{

		@Override
		public void onClick(ClickEvent event) {
			int userchoice = actionsListBox.getSelectedIndex();
			switch(userchoice) {
			case -1:
				break;
			case 0:
				Course c = new Course("corsotest");
				connService.addCourse(c, new AsyncCallback<Boolean>() {

					@Override
					public void onFailure(Throwable caught) {
						Window.alert("ERROR: " + caught);
					}

					@Override
					public void onSuccess(Boolean result) {
						Window.alert("Risultato: "+result);
						
					}					
				});
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
