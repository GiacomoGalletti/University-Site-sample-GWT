package com.google.gwt.sample.stockwatcher.client;

import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;

public class FooterComponent extends Composite {
	private HorizontalPanel hPanel = new HorizontalPanel();
	
	public FooterComponent() {
		initWidget(this.hPanel);
		
		Label l1 = new Label("mail: foo@foo.it\t");
		Label l2 = new Label("telefono: 0123-F00\t");
		Label l3 = new Label("indirizzo: Via del Foo, FOOrli'");
		
		this.hPanel.add(l1);
		this.hPanel.add(l2);
		this.hPanel.add(l3);
	}
}
