package com.google.gwt.sample.progettoingegneria.client.dashboards.settings;

import com.google.gwt.sample.progettoingegneria.client.ConnServiceSingleton;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.TextArea;

/**
 * componente che deve permettere ad uno @Student di vedere 
 * la lista di corsi attualmente disponibili
 * Non deve permettere l'iscrizione, quello � gi� fatto da 
 * un altro componente @CoursesSignUpComponent
 * 
 * Si potrebbe riciclare il codice in maniera furba dal 
 * @CourseListComponent del @Professor?
 */

public class CoursesListComponent extends Composite {
    HorizontalPanel hPanel = new HorizontalPanel();
    TextArea txta = new TextArea();

    public CoursesListComponent() {
        initWidget(hPanel);

        txta.setCharacterWidth(150);
        txta.setVisibleLines(30);
        updateCoursesInfo();
        hPanel.add(txta);

    }

    public void updateCoursesInfo() {
        ConnServiceSingleton.getConnService().viewCoursesInfo(new AsyncCallback<String>() {

            @Override
            public void onFailure(Throwable caught) {
                Window.alert("ERROR: " + caught);
            }

            @Override
            public void onSuccess(String result) {
                txta.setText(result);
            }
        });
    }

}