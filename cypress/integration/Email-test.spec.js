
import TextPage from '../support/PageObjects/TextPage.js'
/// <reference types="cypress"/>

//check for null and maximum text


describe('Text Code URL', () => {
  const textPage =new TextPage();
  it('Generate Basic QR Code for URL', () => {
   cy.visit('https://www.qrcode-monkey.com/#url');
   let mail='sumit@rediffmail.com'
   let subject='Hello'
   let body="Testing String";
   let expected='mailto:'+mail+'?subject='+subject+'&body='+body
   textPage.openEmailTab();
   textPage.submitEmail(mail,subject, body)
   textPage.generateQRCode();
   textPage.getQRCodeContent().should('have.property', 'text', expected);
  });

});

