/// <reference types="cypress"/>
require('cypress-xpath')
const lnk_textTab='[title=\'Create QR Code for a Text\']';
const lnk_emailTab='[title=\'Create QR Code for an Email\']';
const bar_setColor='.accordion > div:nth-of-type(2) > div > h3';
const tbx_singleForegroundColor='.color-group-body > div:nth-of-type(4) > div > color-picker > div > div > input';
const tbx_bkgroundColor='.overflow-visible > div:nth-of-type(3) > div > div > color-picker > div > div > input'
const rbn_singleColor='[name=\'colorMode\']'
const img_qrCode='body > div.wrapper.ng-scope > div.qrcode-generator.ng-scope > div.settings > div > div > div.col-md-5.col-lg-4.settings-download > div.preview > img'
const bar_logoImage='.accordion > div:nth-of-type(3) > div > h3'
const lynk_templateSetting='//button[@type=\'button\'][contains(.,\'QR Code Templates\')]';

const errorMessageQR='.alert-danger';

class HomePage{
    constructor() {}


setTemplate(brandName){
    cy.xpath(lynk_templateSetting).click();
    cy.xpath("//img[@src='/img/qr/templates/"+brandName+".svg']").click();
}

setTitterCircleLogImage(brandName){
        cy.get(bar_logoImage).click();
        cy.xpath("//i[contains(@class,'sprite-logo sprite-logo-"+brandName+"-circle')]").click(); 
    }

setColors(foregroundColor,backgroundColor){
    cy.get(bar_setColor).click();
    cy.get(tbx_singleForegroundColor).clear().type(foregroundColor);
    cy.get('.color-group-body > div:nth-of-type(1)').click();
    cy.get(tbx_bkgroundColor).clear().type(backgroundColor);
}

validateColorOfQRCode(background,foregroundColor){
cy.get(img_qrCode)
    .invoke('attr', 'src').then(src => {
      cy
        .request('https:'+src)
        .its('body')
        .should('include', background)
        .should('include',foregroundColor);
})
}

validateImageInsideQRCode(brandName){
    cy.get(img_qrCode)
        .invoke('attr', 'src').then(src => {
          cy
            .request('https:'+src)
            .its('body')
            .should('include', brandName+"-circle.svg")
    })
}

    
generateQRCode(){
    cy.intercept('https://api.qrcode-monkey.com/qr/custom').as('postRequest')
    cy.get('#button-create-qr-code').click();
    cy.wait('@postRequest').its('response.statusCode').should('eq', 200)
}

clickQRCodeBtn(){
    cy.get('#button-create-qr-code').click();
}

getQRCodeContent(){
    return cy.get('.card-img-top').readCode();
}

openTextTab(){
    cy.get(lnk_textTab).click();

}

openEmailTab(){
    cy.get(lnk_emailTab).click();
}


getErrorMessageForQRCode(){
    return cy.get(errorMessageQR);
}

}

export default HomePage;