package com.google.gwt.sample.progettoingegneria.client;

import com.google.gwt.sample.progettoingegneria.client.dashboards.AdminDashboard;
import com.google.gwt.sample.progettoingegneria.client.dashboards.ProfessorDashboard;
import com.google.gwt.sample.progettoingegneria.client.dashboards.SecretaryDashboard;
import com.google.gwt.sample.progettoingegneria.client.dashboards.StudentDashboard;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.VerticalPanel;

/*
 * il componente MainPage è il componente di base della pagina,
 * Esso contiene:
 *  un headerPanel nel quale è inserito il logo e il menu principale
 *  un vPanel nel quale è inserito un contentPanel che cambierà in base 
 *  	alle azioni compiute dall'utente, ad esempio mostrerà la login e 
 *  	successivamente all'accesso, le dashboard
 *  un footerPanel nel quale è inserito il footer
 */

public class MainPage extends Composite {
	private VerticalPanel vPanel = new VerticalPanel();
	private VerticalPanel contentPanel = new VerticalPanel();
	private VerticalPanel headerPanel = new VerticalPanel();
	private VerticalPanel footerPanel = new VerticalPanel();
	private MenuComponent menu = new MenuComponent(this);
	
	public MainPage() {
		initWidget(this.vPanel);
		
		Image logo = new Image();
		logo.setUrl("https://www.unibo.it/it/logo-unibo.png/@@images/44d79f14-1a99-4a5d-997f-90df029bd63e.png");
		logo.setWidth("100px");
		
		this.vPanel.setBorderWidth(1);
		this.contentPanel.setBorderWidth(1);
		this.headerPanel.add(logo);
		this.headerPanel.add(menu);

		this.vPanel.add(headerPanel);
		this.vPanel.add(contentPanel);
		this.vPanel.add(footerPanel);
		
		openHomePage();
		openFooter();
		
	}
	
	public void setLoginText() {
		this.menu.setLoginText();
	}
	
	public void openLoginPage() {
		this.contentPanel.clear();
		LoginPage loginpage = new LoginPage(this);
		this.contentPanel.add(loginpage);
	}
	
	public void openHomePage() {
		this.contentPanel.clear();
		HomePage homepage = new HomePage();
		this.contentPanel.add(homepage);
	}
	
	public void openStudentDashboard() {
		this.contentPanel.clear();
		StudentDashboard studentDash = new StudentDashboard();
		this.contentPanel.add(studentDash);
	}
	
	public void openProfessorDashboard() {
		this.contentPanel.clear();
		ProfessorDashboard profDash = new ProfessorDashboard();
		this.contentPanel.add(profDash);
	}
	
	public void openSecretaryDashboard() {
		this.contentPanel.clear();
		SecretaryDashboard secDash = new SecretaryDashboard();
		this.contentPanel.add(secDash);
	}
	
	public void openAdminDashboard() {
		this.contentPanel.clear();
		AdminDashboard admDash = new AdminDashboard();
		this.contentPanel.add(admDash);
	}
	
	public void openFooter(){
		this.footerPanel.clear();
		FooterComponent footer = new FooterComponent();
		this.footerPanel.add(footer);
	}

}
