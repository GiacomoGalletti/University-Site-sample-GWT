package com.google.gwt.sample.progettoingegneria.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.ui.RootPanel;

public class ProgettoIngegneria implements EntryPoint {
	
    public void onModuleLoad() {
    	
    	MainPage mainpage = new MainPage();
    	
        RootPanel.get().add(mainpage);
		
    }
}