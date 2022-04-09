package com.google.gwt.sample.progettoingegneria.client;

import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;

/**
 * componente footer della pagina
 */

public class FooterComponent extends Composite {
	private HorizontalPanel hPanel = new HorizontalPanel();
	
	public FooterComponent() {
		initWidget(this.hPanel);
		
		Label l1 = new Label("mail: unibo@unibo.it");
		Label l2 = new Label("  telefono: 0123-345  ");
		Label l3 = new Label("indirizzo: Via Ingegneria del Software, Bologna");
		
		this.hPanel.add(l1);
		this.hPanel.add(l2);
		this.hPanel.add(l3);
	}
}
