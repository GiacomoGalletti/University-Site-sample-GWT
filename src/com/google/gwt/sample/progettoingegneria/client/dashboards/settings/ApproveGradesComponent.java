package com.google.gwt.sample.progettoingegneria.client.dashboards.settings;

import java.util.ArrayList;

import com.google.gwt.event.dom.client.DoubleClickEvent;
import com.google.gwt.event.dom.client.DoubleClickHandler;
import com.google.gwt.sample.progettoingegneria.client.ConnServiceSingleton;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.user.client.ui.VerticalPanel;

public class ApproveGradesComponent extends Composite {
	VerticalPanel vPanel = new VerticalPanel();
	ListBox examList = new ListBox();
	TextArea txta = new TextArea();
	
	public ApproveGradesComponent() {
		initWidget(this.vPanel);
		
		this.vPanel.add(new Label("elenco esami con voti"));
		this.vPanel.add(examList);
		this.vPanel.add(new Label("Studenti e voti:\n"));
		this.vPanel.add(txta);
		
		examList.addDoubleClickHandler(new examListDoubleClickHandler());
		
		retrieveExamsForSecretary();
	}
	
	public class examListDoubleClickHandler implements DoubleClickHandler {
		@Override
		public void onDoubleClick(DoubleClickEvent event) {
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
					/*riempi la textarea con 
					 * STUDENTE|VOTO
					 * STUDENTE|VOTO
					 * sarebbe carina una lista di checkbox
					 * per approvare i voti
					 */
					
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
				// riempi la examListbox con gli esami
				//che hanno voti da approvare
				//IN REALTà per come è implementato adesso
				//LI RESTITUISCE TUTTI
			}
			
		});
	}
	
	
}
