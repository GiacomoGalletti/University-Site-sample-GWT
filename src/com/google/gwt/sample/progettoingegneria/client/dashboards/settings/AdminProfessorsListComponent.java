package com.google.gwt.sample.progettoingegneria.client.dashboards.settings;

import com.google.gwt.event.dom.client.DoubleClickEvent;
import com.google.gwt.event.dom.client.DoubleClickHandler;
import com.google.gwt.sample.progettoingegneria.client.ConnServiceSingleton;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.ListBox;

/**
 * componente che permette ad un Admin di vedere la lista degli user in base
 * alla selezione nel menu precedente
 * 
 */
public class AdminProfessorsListComponent extends Composite {
	private HorizontalPanel baseHPanel = new HorizontalPanel();
	private HorizontalPanel modifPanel = new HorizontalPanel();
	private ListBox usersListBox = new ListBox();
	private AdminUserModifierComponent modifierComp;
	private int nListItem = 0;

	// costruttore
	public AdminProfessorsListComponent() {
		initWidget(this.baseHPanel);
		updateProfessorsListView();
		this.usersListBox.addDoubleClickHandler(new UsersListBoxHandler());
		this.baseHPanel.add(usersListBox);
		this.baseHPanel.add(modifPanel);
	}

	public void updateProfessorsListView() {
		ConnServiceSingleton.getConnService().viewProfessorInfo(new AsyncCallback<String>() {

			@Override
			public void onFailure(Throwable caught) {
				Window.alert("Errore comunicazione server: UPDATECOURSE");
			}

			@Override
			public void onSuccess(String result) {
				String[] list = result.split("_");
				nListItem = list.length;

				for (int i = 0; i < list.length; i++) {
					usersListBox.addItem(list[i]);
				}
				usersListBox.setVisibleItemCount(nListItem);
			}

		});

	}

	private class UsersListBoxHandler implements DoubleClickHandler {

		@Override
		public void onDoubleClick(DoubleClickEvent event) {
			modifPanel.clear();
			modifierComp = new AdminUserModifierComponent(usersListBox.getSelectedItemText().split(" "));
			modifPanel.add(modifierComp);
		}
	}

}