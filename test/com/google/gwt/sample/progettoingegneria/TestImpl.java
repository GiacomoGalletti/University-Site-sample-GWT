package com.google.gwt.sample.progettoingegneria;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import com.google.gwt.sample.progettoingegneria.client.ConnService;
import com.google.gwt.sample.progettoingegneria.server.ConnServiceImpl;
import com.google.gwt.sample.progettoingegneria.server.Databases.CoursesDB;
import com.google.gwt.sample.progettoingegneria.server.Databases.ExamsDB;
import com.google.gwt.sample.progettoingegneria.server.Databases.GradesDB;
import com.google.gwt.sample.progettoingegneria.server.Databases.UsersDB;
import com.google.gwt.sample.progettoingegneria.shared.Course;
import com.google.gwt.sample.progettoingegneria.shared.UserState;

@TestMethodOrder(OrderAnnotation.class)
public class TestImpl {
   
	static ConnService implTest;
	String nullString = null;
	String emptyString = "";
	
	@BeforeAll
	public static void setup() {
		implTest = new ConnServiceImpl();
		CoursesDB.clearDB();
		ExamsDB.clearDB();
		UsersDB.clearDB();
		GradesDB.clearDB();
	}
	
	@AfterAll
	public static void resetDB() {
		UsersDB.clearDB();
		CoursesDB.clearDB();
		ExamsDB.clearDB();
		GradesDB.clearDB();
		UsersDB.rootUserInit();
	}
	
	@Test
	@Order(1)
	@DisplayName("Test di comunicazione con il server")
	public void testServerComunication() throws Exception {
		Assertions.assertEquals("0",implTest.testCall("0"));
	}
			
	@Test
    @Order(2)
	@DisplayName("Test di inserimento di un utente nel UsersDB")
	public void testUserInsert() throws Exception {
		implTest.signUp("usernameTest", "passwordTest", "email@test","nameTest", "surnameTest", 0);
		Assertions.assertTrue(UsersDB.checkMailExist("email@test"));
	}
	
	@Test
    @Order(3)
	@DisplayName("Test recezione info di un user")
	public void testGetUserInfo() throws Exception {
		Assertions.assertNotEquals(emptyString, implTest.getInfoUser("email@test"));
	}
	
	@Test
	@Order(4)
	@DisplayName("Test login")
	public void testUserLogin() throws Exception {
		Assertions.assertEquals(UserState.STUDENT, implTest.loginRequest("email@test","passwordTest"));
	}
	
	@Test
	@Order(5)
	@DisplayName("Test modifica delle informazioni dello user Test")
	public void  testSetUserInfo() {
		implTest.setUserInfo("email@test", "nameTest_NEW", "surnameTest_NEW", "usernameTest_NEW", "passwordTest_NEW");
		Assertions.assertEquals("nameTest_NEW",UsersDB.getUser("email@test").getName());
		Assertions.assertEquals("surnameTest_NEW",UsersDB.getUser("email@test").getSurname());
		Assertions.assertEquals("usernameTest_NEW",UsersDB.getUser("email@test").getUserName());
		Assertions.assertEquals("passwordTest_NEW",UsersDB.getUser("email@test").getPw());
	}
	
	@Test
	@Order(6)
	@DisplayName("Reset delle modifiche alle informazioni dello user Test")
	public void  testReverseSetUserInfo() throws Exception  {
		implTest.setUserInfo("email@test","nameTest", "surnameTest", "usernameTest", "passwordTest");
		Assertions.assertEquals("nameTest",UsersDB.getUser("email@test").getName());
		Assertions.assertEquals("surnameTest",UsersDB.getUser("email@test").getSurname());
		Assertions.assertEquals("usernameTest",UsersDB.getUser("email@test").getUserName());
		Assertions.assertEquals("passwordTest",UsersDB.getUser("email@test").getPw());
	}
	
	@Test
	@Order(7)
	@DisplayName("Test del recupero della lista degli studenti")
	public void testRetiveStudentsList() throws Exception {
		Assertions.assertNotEquals(emptyString, implTest.retrieveInfoStudentList());
	}
	
	@Test
    @Order(8)
	@DisplayName("Test di eliminazione utente test nel UsersDB")
	public void testUserDelete() throws Exception {
		implTest.deleteUserByEmail("email@test");
		Assertions.assertFalse(UsersDB.checkMailExist("email@test"));
	}
	
	@Test
	@Order(9)
	@DisplayName("Test di aggiunta di un corso in CoursesDB")
	public void testAddCourse() throws Exception {
		implTest.signUp("profTest", "profTest", "prof@test","profTest", "profTest", 1);
		Assertions.assertTrue(implTest.addCourse("nomeTest", "31/12/2055", "31/12/2088", "prof@test", "coDoc", "descrizionetest"));
	}

	@Test
	@Order(10)
	@DisplayName("Test del recupero dei corsi di un prof in CoursesDB")
	public void testGetProfInfo() throws Exception {
		Assertions.assertNotEquals(emptyString,implTest.viewProfessorCoursesInfo("prof@test"));
	}
	
	@Test
	@Order(11)
	@DisplayName("Test di recupero di un corso del CoursesDB")
	public void testGetCourses() throws Exception {
		Assertions.assertTrue(CoursesDB.checkCourseExist("nomeTest"));
	}
	
	
	@Test
	@Order(12)
	@DisplayName("Test modifica delle informazioni del corso Test")
	public void  testSetCourseInfo() throws Exception {
		Assertions.assertTrue(implTest.setCourseData("nomeTest", "21/12/2055", "11/12/2088", "NEW_nomeTest", "NEW_coDoc", "NEW_descrizionetest"));
		Assertions.assertEquals("NEW_coDoc",CoursesDB.getCourse("NEW_nomeTest").getCoDoc());
		Assertions.assertEquals("NEW_descrizionetest",CoursesDB.getCourse("NEW_nomeTest").getDesc());
		Assertions.assertEquals("NEW_nomeTest",CoursesDB.getCourse("NEW_nomeTest").getName());
		Assertions.assertEquals("21/12/2055",CoursesDB.getCourse("NEW_nomeTest").getStartingDate());
	}
	
	@Test
	@Order(13)
	@DisplayName("Test di recupero dei corsi a cui può iscriversi l'utente Test")
	public void testRetrieveAviableCourses() throws Exception {
		testUserInsert();
		Assertions.assertNotEquals(emptyString, implTest.retrieveAviableCourses("email@test"));
		Assertions.assertEquals(emptyString,implTest.retrieveSubscribedCourses("email@test"));
	}
	
	@Test
	@Order(14)
	@DisplayName("Verifica che il corso esista")
	public void testCheckCourseExist() throws Exception {
		Assertions.assertTrue(CoursesDB.checkCourseExist("NEW_nomeTest"));
	}
	
	
	@Test
	@Order(15)
	@DisplayName("Test di iscrizione al corso")
	public void testCourseRegistration() throws Exception {
		Assertions.assertTrue(implTest.courseRegistration("email@test","NEW_nomeTest"));
	}
	
	@Test
	@Order(16)
	@DisplayName("Verifica corsi a cui sono registrato")
	public void testRetrieveSubscribedCourses() throws Exception {
		Assertions.assertNotEquals(emptyString,implTest.retrieveSubscribedCourses("email@test"));
	}
	
	@Test
	@Order(17)
	@DisplayName("Test di creazione esame")
	public void testDeleteCourse() throws Exception {
		Assertions.assertEquals("esame aggiunto ",implTest.addExam("nomeTest", "21/12/2058", "12:00", "prof@test", "aulaTest", "120", CoursesDB.getCourse("NEW_nomeTest").getStudentsEmail()));
	}
	
	@Test
	@Order(18)
	@DisplayName("Test di recupero degli esami di un prof")
	public void testRetrieveExams() throws Exception {
		Assertions.assertNotEquals(emptyString,implTest.retrieveExams("prof@test"));
	}
	
	@Test
	@Order(19)
	@DisplayName("Test di recupero degli esami che uno studente può iscriversi")
	public void testGetAvailableExams() throws Exception {
		Assertions.assertNotEquals(emptyString,implTest.getAvailableExams("email@test","nomeTest"));
	}
	
	@Test
	@Order(20)
	@DisplayName("Test di recupero delle info di un esame")
	public void testGetExamData() throws Exception {
		Assertions.assertNotEquals(emptyString,implTest.getExamData("nomeTest"));
	}
	
	@Test
	@Order(21)
	@DisplayName("Test di iscrizione ad un esame")
	public void testRegisterStudentInExam() throws Exception {
		Assertions.assertTrue(implTest.registerStudentInExam("nomeTest", "email@test"));
	}
	
	@Test
	@Order(22)
	@DisplayName("Test di recupero degli esami a cui uno studente è iscrtitto")
	public void testRetrieveSubscribedExams() throws Exception {
		Assertions.assertNotEquals(emptyString,implTest.retrieveSubscribedExams("email@test"));
	}
	
	@Test
	@Order(23)
	@DisplayName("Test di recupero degli studenti iscritti ad un esame")
	public void testGetStudentsExamList() throws Exception {
		Assertions.assertNotEquals(emptyString,implTest.getStudentsExamList("nomeTest"));
	}
	
	@Test
	@Order(24)
	@DisplayName("Test di aggiunta dei voti di un esame")
	public void testAddGrades() throws Exception {
		final String[] listStudents = {"email@test"};
		final String[] listGrades = {"30"};
		Assertions.assertTrue(implTest.sendGrades("nomeTest",listStudents, listGrades));
	}
	
	@Test
	@Order(25)
	@DisplayName("Test ritorno dei voti data l'e-mail dello studente// un voto deve essere pubblicato per poterlo vedere")
	public void testGetGrades() throws Exception {
		Assertions.assertTrue(implTest.publishGrades("nomeTest"));
		Assertions.assertEquals("nomeTest: 30\n",implTest.getGrades("email@test"));
	}
}
