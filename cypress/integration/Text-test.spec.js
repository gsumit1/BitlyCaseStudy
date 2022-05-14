
//import HomePage from '../support/PageObjects/HomePage.js';
import TextPage from '../support/PageObjects/TextPage.js'
/// <reference types="cypress"/>

//check for null and maximum text


describe('Generate QR Code for Text', () => {
  const textPage =new TextPage();
  it('Generate Basic QR Code for URL', () => {
   cy.visit('https://www.qrcode-monkey.com/#url');
   let text="Testing String";
   textPage.openTextTab();
   textPage.submitText(text);
   textPage.generateQRCode();
   textPage.getQRCodeContent().should('have.property', 'text', text);
  });



  describe('Maximum Text Code URL', () => {
    const textPage =new TextPage();
    it('Generate Basic QR Code for URL', () => {
     cy.visit('https://www.qrcode-monkey.com/#url');
     let text="Testing String";
     textPage.openTextTab();
     textPage.submitText(text);
     textPage.generateQRCode();
     textPage.getQRCodeContent().should('have.property', 'text', text);
    });

});

