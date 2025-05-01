import {HomePage} from "../pageObjects/HomePage";
import {AppointmentPage} from "../pageObjects/AppointmentPage";
import {ConfirmationPage} from "../pageObjects/ConfirmationPage";
import {HistoryPage} from "../pageObjects/HistoryPage";

const USERNAME = "John Doe";
const PASSWORD = "ThisIsNotAPassword";
const FACILITY = "Seoul CURA Healthcare Center";
const DAYS = "30";
const COMMENT = "CURA Healthcare Service";

describe("MD2", () => {
  context("appointments test", () => {
    beforeEach(() => {
      HomePage.visit();
    });

    it("Make an Appointment", () => {
      HomePage.buttonAppointment.click();

      // login process
      AppointmentPage.inputUsername.type(USERNAME);
      AppointmentPage.inputPassword.type(PASSWORD);
      AppointmentPage.loginButton.click();

      // making appointment
      AppointmentPage.comboFacility.select(FACILITY);
      AppointmentPage.checkboxHospital.click();
      AppointmentPage.radioMedicaid.click();
      AppointmentPage.inputVisitDate.click();
      AppointmentPage.datePickerDays.contains(".day", DAYS).click();
      AppointmentPage.textareaComment.type(COMMENT);
      AppointmentPage.buttonBookAppointment.click();

      // validation
      ConfirmationPage.facility.should("contain.text", FACILITY);
      ConfirmationPage.hospitalReadmission.should("contain.text", "Yes");
      ConfirmationPage.program.should("contain.text", "Medicaid");
      ConfirmationPage.visitDate.should("contain.text", DAYS);
      ConfirmationPage.comment.should("contain.text", COMMENT);
    });

    it("Appointment history empty", () => {
      HomePage.buttonAppointment.click();
      
      // login process
      AppointmentPage.inputUsername.type(USERNAME);
      AppointmentPage.inputPassword.type(PASSWORD);
      AppointmentPage.loginButton.click();

      // validation
      AppointmentPage.menuToggle.click();
      AppointmentPage.wrapperSidebar.should("contain.class", "active");
      AppointmentPage.wrapperSidebar.contains("li", "History").click();
      HistoryPage.history.should("contain.text", "No appointment.");
    });
  });
});
