
import EmailPage from '../support/PageObjects/EmailPage.js'
/// <reference types="cypress"/>

//check for null and maximum text


describe('Text Code URL', () => {
  const emailPage =new EmailPage();
  it('Generate Basic QR Code for URL', () => {
   cy.visit('/');
   let mail='sumit@rediffmail.com'
   let subject='Hello'
   let body="Testing String";
   let expected='mailto:'+mail+'?subject='+subject+'&body='+body
   emailPage.openEmailTab();
   emailPage.submitEmail(mail,subject, body)
   emailPage.generateQRCode();
   emailPage.getQRCodeContent().should('have.property', 'text', expected);
  });

});

