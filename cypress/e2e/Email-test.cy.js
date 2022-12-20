import EmailPage from '../support/PageObjects/EmailPage.js'
/// <reference types="cypress"/>
describe('QRCode for Email', () => {
  const emailPage =new EmailPage();
  it('Generate QR Code for Email', () => {
    cy.fixture('DataFolder/mail').then(testdata => {
      cy.visit('/');
      let mail=testdata.mailID;
      let subject=testdata.subject;
      let body=testdata.body;
      let expected='mailto:'+mail+'?subject='+subject+'&body='+body
      emailPage.acceptCookie();
      emailPage.openEmailTab();
      emailPage.submitEmail(mail,subject, body)
      emailPage.generateQRCode();
      emailPage.getQRCodeContent().should('have.property', 'text', expected);
  });
  });
});

