import PhonePage from '../support/PageObjects/PhonePage.js'
/// <reference types="cypress"/>
describe('QRCode for Phone Number', () => {
  const phonePage =new PhonePage();
  it('Generate QR Code for phone number', () => {
    cy.visit('/');
    let phoneNumber="9810106965";
    phonePage.openTab("Phone");
    phonePage.submitPhoneNumber(phoneNumber);
    phonePage.generateQRCode();
    phonePage.getQRCodeContent().should('have.property', 'text', "tel:"+phoneNumber);
  });

});

