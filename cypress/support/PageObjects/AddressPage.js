import HomePage from "./CommonPage.js";

const tbx_addressName='//input[@ng-change=\'setLocation()\']';
const tbx_lat='#qrcodeMapsLatitude'
const tbx_log='#qrcodeMapsLongitude'

class AddressPage extends HomePage {
    
    constructor() {
        super()
      }

submitAddress(addressName, latitude, longitute){
        const qrCodeEmail=cy.xpath(tbx_addressName);
        qrCodeEmail.clear();
        qrCodeEmail.type(addressName)

        const subjecttbx=cy.get(tbx_lat);
        
        subjecttbx.clear();
        subjecttbx.type(latitude)
        
        const bodytbx=cy.get(tbx_log);

        bodytbx.clear();
        bodytbx.type(longitute)
}


}
export default AddressPage;