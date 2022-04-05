package com.google.gwt.sample.progettoingegneria.client.dashboards.settings;

import com.google.gwt.event.dom.client.DoubleClickEvent;
import com.google.gwt.event.dom.client.DoubleClickHandler;
import com.google.gwt.sample.progettoingegneria.client.ConnServiceSingleton;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.VerticalPanel;

/**
 * componente che permette ad un Admin di vedere la
 * lista degli user in base alla selezione nel menu precedente
 * 
 */
public class AdminUsersListComponent extends Composite {
	private VerticalPanel vPanel = new VerticalPanel();
	
	private ListBox usersListBox = new ListBox();
	private int nListItem = 0;
	private AdminUsersListCaller adminCaller;
	
	// costruttore
	public AdminUsersListComponent(AdminUsersListCaller adminCaller) {
		initWidget(this.vPanel);
		this.adminCaller = adminCaller;
		this.adminCaller.updateUsersListView();
		this.usersListBox.addDoubleClickHandler(new UsersListBoxHandler());
		this.vPanel.add(usersListBox);
	}
		
	
	public void initWidget() {
		
	}
	
	private class UsersListBoxHandler implements DoubleClickHandler {

		@Override
		public void onDoubleClick(DoubleClickEvent event) {
			// TODO Auto-generated method stub
			
		}
	}
	
	public class StudentState implements AdminUsersListCaller {
		
		public StudentState() {}
		
		@Override
		public void updateUsersListView() {
			ConnServiceSingleton.getConnService().viewStudentInfo(new AsyncCallback<String>() {

				@Override
				public void onFailure(Throwable caught) {
					Window.alert("Errore comunicazione server: UPDATECOURSE");
				}

				@Override
				public void onSuccess(String result) {
					String[] list = result.split("@"); 
					nListItem = list.length;
					
					for (int i=0; i<list.length; i++) {
						usersListBox.addItem(list[i]);
					}
					usersListBox.setVisibleItemCount(nListItem);
					Window.alert("Student Info fatto");
				}
				
			});
		}
	}

	public class ProfessorState implements AdminUsersListCaller {
		@Override
		public void updateUsersListView() {
			ConnServiceSingleton.getConnService().viewProfessorInfo(new AsyncCallback<String>() {

				@Override
				public void onFailure(Throwable caught) {
					Window.alert("Errore comunicazione server: UPDATECOURSE");
				}

				@Override
				public void onSuccess(String result) {
					String[] list = result.split("@"); 
					nListItem = list.length;
					
					for (int i=0; i<list.length; i++) {
						usersListBox.addItem(list[i]);
					}
					usersListBox.setVisibleItemCount(nListItem);
				}
				
			});
		}
	 }

	public class SecretaryState implements AdminUsersListCaller {
		@Override
		public void updateUsersListView() {
			ConnServiceSingleton.getConnService().viewSecretaryInfo(new AsyncCallback<String>() {

				String output;
				@Override
				public void onFailure(Throwable caught) {
					Window.alert("Errore comunicazione server: UPDATECOURSE");
				}

				@Override
				public void onSuccess(String result) {
					output = result;
//					String[] list = result.split("@"); 
//					nListItem = list.length;
//					
//					for (int i=0; i<list.length; i++) {
//						usersListBox.addItem(list[i]);
//					}
//					usersListBox.setVisibleItemCount(nListItem);
				}
				
			});
		}
	}
	
	public class StateLessState implements AdminUsersListCaller {
		@Override
		public void updateUsersListView() {
			Window.alert("STATELESS");
		}
	}
}


