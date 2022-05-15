import TextPage from '../support/PageObjects/TextPage.js'
/// <reference types="cypress"/>

describe('Generate QR Code for Text', () => {
  const textPage =new TextPage();
  it('Generating QR Code for minimum characters(22) as well as maximum characters(400)', () => {
    cy.fixture('DataFolder/textData').then(testdata => {
        testdata.forEach(data => {                  
            cy.visit('https://www.qrcode-monkey.com/#url');
            var textString=data.text;
            textPage.openTextTab();
            textPage.submitText(textString);
            textPage.generateQRCode();
            textPage.getQRCodeContent().should('have.property', 'text', textString);
        });
    });
  }); 

  it('No QR Code should be generated for blank text', () => {
    cy.visit('https://www.qrcode-monkey.com/#url');
    textPage.openTextTab();
    textPage.clickQRCodeBtn();
    textPage.getErrorCode().should('contain.text','This field is required');
    textPage.getErrorMessageForQRCode('have.text','There are errors you have to fix before generating.')
   });
});



 




