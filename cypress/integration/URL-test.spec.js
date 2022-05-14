
import URLPage from '../support/PageObjects/URLPage.js'
/// <reference types="cypress"/>

describe('QR Code URL', () => {
  const urlPage =new URLPage();
  it('Generate Basic QR Code for URL', () => {
   cy.visit('/#url');
   let url="https://www.lumen.com";
   urlPage.submitQRCode(url);
   urlPage.generateQRCode();
   urlPage.getQRCodeContent().should('have.property', 'text', url);
  });

  it('QR Code should not be generated for blank url', () => {
    cy.visit('/#url');
    urlPage.clearQRCodeTextBox();
    urlPage.clickQRCodeBtn();
    urlPage.getErrorCode().should('contain.text','Enter a valid URL');
    urlPage.getErrorMessageForQRCode('have.text','There are errors you have to fix before generating.')
   });


   it('QR Code should not be generated for incorrect url', () => {
    cy.visit('/#url');
    let url="www.lumen.com";
    urlPage.submitQRCode(url);
    urlPage.clickQRCodeBtn();
    urlPage.getErrorCode().should('contain.text','Enter a valid URL');
    urlPage.getErrorMessageForQRCode('have.text','There are errors you have to fix before generating.')
   });
   

   it('Generate Basic QR Code for URL in customized color', () => {
    cy.visit('https://www.qrcode-monkey.com/#url');
    let url="https://www.lumen.com";
    urlPage.submitQRCode(url);
    urlPage.setColors("#1B0FEF","#A0EABC") // rgb(160,234,188), rgb(27, 15, 239)
    urlPage.generateQRCode();
    urlPage.getQRCodeContent().should('have.property', 'text', url);
    urlPage.validateColorOfQRCode( 'rgb(160,234,188)', 'rgb(27, 15, 239)')
});

it('Generate Basic QR Code for URL with twitter logo image and customized color', () => {
  cy.visit('https://www.qrcode-monkey.com/#url');
  let url="https://www.lumen.com";
  urlPage.submitQRCode(url);
  urlPage.setColors("#1B0FEF","#A0EABC") // rgb(160,234,188), rgb(27, 15, 239)
  urlPage.setTitterCircleLogImage('twitter')
  urlPage.generateQRCode();
  urlPage.getQRCodeContent().should('have.property', 'text', url);
  urlPage.validateColorOfQRCode( 'rgb(160,234,188)', 'rgb(27, 15, 239)')
  urlPage.validateImageInsideQRCode('twitter')
});

it('Generate QR Code for URL with template', () => {
  cy.visit('https://www.qrcode-monkey.com/#url');
  let url="https://www.lumen.com";
  urlPage.setTemplate("facebook")
  urlPage.submitQRCode(url);
  urlPage.generateQRCode();
  urlPage.getQRCodeContent().should('have.property', 'text', url);
  urlPage.validateColorOfQRCode( 'rgb(255,255,255)', 'rgb(59, 89, 152);')
});


});;

