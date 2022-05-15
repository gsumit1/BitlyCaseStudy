import PhonePage from '../support/PageObjects/PhonePage.js'
/// <reference types="cypress"/>
describe('QRCode for Phone Number', () => {
  const phonePage =new PhonePage();
  it('Generate QR Code for phone number', () => {
    cy.fixture('DataFolder/phoneNumber').then(testdata => {
      cy.visit('/');
      let phoneNumber=testdata.telNumber;
      phonePage.openTab("Phone");
      phonePage.submitPhoneNumber(phoneNumber);
      phonePage.generateQRCode();
      phonePage.getQRCodeContent().should('have.property', 'text', "tel:"+phoneNumber);
  });
  })
});

