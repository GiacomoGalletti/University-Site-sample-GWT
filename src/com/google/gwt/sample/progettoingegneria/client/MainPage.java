package com.google.gwt.sample.progettoingegneria.client;

import com.google.gwt.sample.progettoingegneria.client.dashboards.AdminDashboard;
import com.google.gwt.sample.progettoingegneria.client.dashboards.ProfessorDashboard;
import com.google.gwt.sample.progettoingegneria.client.dashboards.SecretaryDashboard;
import com.google.gwt.sample.progettoingegneria.client.dashboards.StudentDashboard;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.VerticalPanel;

public class MainPage extends Composite {
	private VerticalPanel vPanel = new VerticalPanel();
	private VerticalPanel contentPanel = new VerticalPanel();
	private VerticalPanel footerPanel = new VerticalPanel();
	
	public MainPage() {
		initWidget(this.vPanel);
		
		MenuComponent menu = new MenuComponent(this);
		Image logo = new Image();
		logo.setUrl("https://cdn.pixabay.com/photo/2012/05/07/01/54/owl-47526_960_720.png");
		logo.setWidth("100px");
		
		this.vPanel.setBorderWidth(1);
		this.contentPanel.setBorderWidth(1);
		
		this.vPanel.add(logo);
		this.vPanel.add(menu);
		this.vPanel.add(contentPanel);
		this.vPanel.add(footerPanel);
		
		openHomePage();
		openFooter();
		
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
