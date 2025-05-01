import { BasePage } from "./BasePage";

export class AppointmentPage extends BasePage {
    static get url() {
        return "/index.php#appointment";
    }

    static get inputUsername() {
        return cy.get("#txt-username");
    }

    static get inputPassword() {
        return cy.get("#txt-password")
    }

    static get loginButton() {
        return cy.get("#btn-login");
    }

    static get comboFacility() {
        return cy.get("#combo_facility");
    }

    static get checkboxHospital() {
        return cy.get("#chk_hospotal_readmission");
    }

    static get radioMedicaid() {
        return cy.get("#radio_program_medicaid");
    }

    static get inputVisitDate() {
        return cy.get("#txt_visit_date");
    }

    static get datePickerDays() {
        return cy.get(".datepicker-days");
    }

    static get textareaComment() {
        return cy.get("#txt_comment");
    }

    static get buttonBookAppointment() {
        return cy.get("#btn-book-appointment");
    }

    static get menuToggle() {
        return cy.get("#menu-toggle");
    }

    static get wrapperSidebar() {
        return cy.get("#sidebar-wrapper");
    }
}
