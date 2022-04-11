package com.google.gwt.sample.progettoingegneria.client.dashboards.settings;

public class AdminStateList<AdminUsersListCaller> {
	private AdminUsersListCaller stateType;
	
	public AdminStateList(AdminUsersListCaller t){
		this.stateType=t;
	}
	public AdminUsersListCaller getContenuto() {
		return this.stateType;
	}
}
