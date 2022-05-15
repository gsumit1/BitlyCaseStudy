import AddressPage from '../support/PageObjects/AddressPage.js'
/// <reference types="cypress"/>
describe('QRCode for Location', () => {
  const addressPage =new AddressPage();
  it('Generate QR Code for Address', () => {
    cy.fixture('DataFolder/location').then(testdata => {
      cy.visit('/');
      let Search_Your_Address=testdata.Search_Your_Address
      let Latitude=testdata.Latitude
      let Longitude=testdata.Longitude
      let expected='https://maps.google.com/local?q='+Latitude+','+Longitude
      addressPage.openTab("Location")
      addressPage.submitAddress(Search_Your_Address,Latitude, Longitude)
      addressPage.generateQRCode();
      addressPage.getQRCodeContent().should('have.property', 'text', expected);
  });
  });
});