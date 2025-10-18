import userData from "../fixtures/userData.json";
import LoginPage from "../pages/loginPage.js";
import DashboardPage from "../pages/dashboardPage.js";
import MenuPage from "../pages/menuPage.js";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();

describe("Orange HRM Tests", () => {
  const selectorsList = {
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input",
    dateField: "[placeholder='dd-mm-yyyy']",
    nationalityField: "[tabindex='0']",
    dateCloseButton:
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon",
    dateCloseButton2: ".--close",
    submitButton: "[type='submit']",
  };

  it.only("User Info Update - Success", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(
      userData.userSuccess.username,
      userData.userSuccess.password
    );

    dashboardPage.checkDashboardPage();

    menuPage.accessMyInfo();

    cy.get(selectorsList.firstNameField).clear().type("FirstNameTest");
    cy.get(selectorsList.lastNameField).clear().type("LastNameTest");
    cy.get(selectorsList.genericField).eq(3).clear().type("NicknameTest");
    cy.get(selectorsList.genericField).eq(4).clear().type("Employee");
    cy.get(selectorsList.genericField).eq(5).clear().type("OtherIdTest");
    cy.get(selectorsList.genericField).eq(6).clear().type("DriversLicenseTest");
    cy.get(selectorsList.genericField).eq(7).clear().type("2025-09-15");
    cy.get(selectorsList.dateCloseButton).click();
    cy.get(selectorsList.dateCloseButton2).click();
    cy.get(selectorsList.nationalityField).eq(0).click();
    cy.contains(".oxd-select-option", "Brazilian").click();
    cy.get(selectorsList.nationalityField).eq(1).click();
    cy.contains(".oxd-select-option", "Married").click();
    cy.get(selectorsList.submitButton).eq(0).click();
    cy.get(".oxd-button").eq(1).click();
  });

  it("Login - Fail", () => {
    cy.visit("/auth/login");
    cy.get(selectorsList.usernameField).type(userData.userFail.username);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.wrongCredentialAlert);
  });
});
