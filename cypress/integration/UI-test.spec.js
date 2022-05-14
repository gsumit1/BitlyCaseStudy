import URLPage from '../support/PageObjects/URLPage.js'
/// <reference types="cypress"/>

describe('Validate the UI of the Page', () => {
    const urlPage =new URLPage();
    it('Generate Basic QR Code for URL', () => {
     cy.visit('/#url');
     let url="https://www.lumen.com";
     urlPage.submitQRCode(url);
     urlPage.generateQRCode();
     urlPage.getQRCodeContent().should('have.property', 'text', url);
    });
});  