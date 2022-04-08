package com.google.gwt.sample.progettoingegneria.client.dashboards.settings;

import com.google.gwt.sample.progettoingegneria.client.ConnServiceSingleton;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.user.client.ui.VerticalPanel;

public class InfoStudentListComponent extends Composite {
	VerticalPanel vPanel = new VerticalPanel();
	Label l1 = new Label("informazioni personali studenti");
	TextArea txta = new TextArea();
	
	public InfoStudentListComponent() {
		initWidget(this.vPanel);
		
		this.vPanel.add(l1);
		this.vPanel.add(txta);
		
		retrieveInfoStudentList();
	}
	
	public void retrieveInfoStudentList() {
		ConnServiceSingleton
		.getConnService()
		.retrieveInfoStudentList(new AsyncCallback<String>() {

			@Override
			public void onFailure(Throwable caught) {
				Window.alert("ERROR: "+ caught);
				
			}

			@Override
			public void onSuccess(String result) {
				txta.setText(result);
			}
			
		});
	}
}
