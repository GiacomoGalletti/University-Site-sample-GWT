package com.google.gwt.sample.progettoingegneria.client;

import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.VerticalPanel;

/**
 * 
 * componente HomePage ovvero contenuto centrale
 * della pagina quando si seleziona Home
 *
 */

public class HomePage extends Composite {
	private VerticalPanel vPanel = new VerticalPanel();
	
	public HomePage() {
		initWidget(this.vPanel);
		
		Label titleLabel = new Label("UniBo");
		Image logoImage = new Image();
		Label l1 = new Label("Dipartimenti:\n-Matematica\n-Informatica\n-Scienze");
		
		logoImage.setUrl("https://www.unibo.it/it/logo-unibo.png/@@images/44d79f14-1a99-4a5d-997f-90df029bd63e.png");
		logoImage.setWidth("50%");
		
		this.vPanel.add(titleLabel);
		this.vPanel.add(logoImage);
		this.vPanel.add(l1);
	}
}
