class MyinfoPage {
  selectorsList() {
    const selectors = {
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

    return selectors;
  }

  fillPersonalDetails(firstName, lastName, nickName) {
    cy.get(this.selectorsList().firstNameField).clear().type(firstName);
    cy.get(this.selectorsList().lastNameField).clear().type(lastName);
    cy.get(this.selectorsList().genericField).eq(3).clear().type(nickName);
  }

  fillEmployeeDetails(employId, otherId, driversLicenseNumber, expiryDate) {
    cy.get(this.selectorsList().genericField).eq(4).clear().type(employId);
    cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId);
    cy.get(this.selectorsList().genericField).eq(6).clear().type(driversLicenseNumber);
    cy.get(this.selectorsList().genericField).eq(7).clear().type(expiryDate);
    cy.get(this.selectorsList().dateCloseButton).click();
    cy.get(this.selectorsList().dateCloseButton2).click();
    cy.get(this.selectorsList().nationalityField).eq(0).click();
    cy.contains(".oxd-select-option", "Brazilian").click();
    cy.get(this.selectorsList().nationalityField).eq(1).click();
  }

  saveForm() {
    cy.get(this.selectorsList().submitButton).eq(0).click();
    cy.get(".oxd-toast-close");
  }

  fillStatus() {
    cy.contains(".oxd-select-text--arrow", "Married").click();
  }
}

export default MyinfoPage;
