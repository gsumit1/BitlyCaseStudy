import AddressPage from '../support/PageObjects/AddressPage.js'
/// <reference types="cypress"/>
describe('QRCode for Location', () => {
  const addressPage =new AddressPage();
  it('Generate QR Code for Address', () => {
   cy.visit('/');
   let Search_Your_Address='Taj Mahal'
   let Latitude='27.17479'
   let Longitude="78.042177";
   let expected='https://maps.google.com/local?q='+Latitude+','+Longitude
   addressPage.openTab("Location")
   addressPage.submitAddress(Search_Your_Address,Latitude, Longitude)
   addressPage.generateQRCode();
   addressPage.getQRCodeContent().should('have.property', 'text', expected);
  });

});