package com.google.gwt.sample.progettoingegneria.client.dashboards.settings;

import java.util.ArrayList;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.DoubleClickEvent;
import com.google.gwt.event.dom.client.DoubleClickHandler;
import com.google.gwt.sample.progettoingegneria.client.ConnServiceSingleton;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ButtonBase;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.user.client.ui.VerticalPanel;

public class ApproveGradesComponent extends Composite {
	VerticalPanel vPanel = new VerticalPanel();
	ListBox examList = new ListBox();
	TextArea txta = new TextArea();
	ButtonBase pubBtn = new Button("PUBBLICA");
	boolean publishConfirmed;
	Label lab1 = new Label("STUDENTI E VOTI:\n");
	public ApproveGradesComponent() {
		initWidget(this.vPanel);
		
		this.vPanel.add(new Label("ELENCO ESAMI:"));
		this.vPanel.add(examList);

		this.pubBtn.addClickHandler(new pubBtnHandler());
		examList.addDoubleClickHandler(new examListDoubleClickHandler());
		
		retrieveExamsForSecretary();
	}
	
	public class examListDoubleClickHandler implements DoubleClickHandler {
		@Override
		public void onDoubleClick(DoubleClickEvent event) {
			vPanel.add(lab1);
			vPanel.add(txta);
			String selectedExam = examList.getSelectedItemText();
			ConnServiceSingleton
			.getConnService()
			.retrieveGradesAndStudents(selectedExam,new AsyncCallback<String>() {

				@Override
				public void onFailure(Throwable caught) {
					Window.alert("ERROR: "+ caught);
				}

				@Override
				public void onSuccess(String result) {
					if (result.isEmpty()) {
						txta.setText("Nessun Voto da approvare");
						vPanel.remove(pubBtn);
					} else {
						txta.setText(result);
						vPanel.add(pubBtn);
					}
					
						
				}
				
			});
		}
	}
	
	public void retrieveExamsForSecretary() {
		ConnServiceSingleton
		.getConnService()
		.retrieveExamsForSecretary(new AsyncCallback<ArrayList<String>>() {

			@Override
			public void onFailure(Throwable caught) {
				Window.alert("ERROR: "+ caught);
			}

			@Override
			public void onSuccess(ArrayList<String> result) {
				for(String e : result) {
					examList.addItem(e);
				}
				
				examList.setVisibleItemCount(result.size());
			}
			
		});
	}
	
	public void changeExamState() {
		if (publishConfirmed) {
			ConnServiceSingleton.getConnService().changeExamState(examList.getSelectedItemText(), new AsyncCallback<Boolean>() {

				@Override
				public void onFailure(Throwable caught) {
					Window.alert("Cambio stato esame fallito");

				}

				@Override
				public void onSuccess(Boolean result) {
					publishConfirmed = false;
				}
			});
		}
	}

	public void publishGrades() {
		ConnServiceSingleton.getConnService().publishGrades(examList.getSelectedItemText(), new AsyncCallback<Boolean>() {

			@Override
			public void onFailure(Throwable caught) {
				Window.alert("Pubblicazione voti fallita");
			}

			@Override
			public void onSuccess(Boolean result) {
				Window.alert("Voti Pubblicati");
			}
			
		});
	}
	
	public class pubBtnHandler implements ClickHandler {
		
		@Override
		public void onClick(ClickEvent event) {
			publishGrades();
			publishConfirmed = true;
			changeExamState();
			vPanel.clear();			
		}
		
	}
	
}
