import HomePage from "./CommonPage.js";

const tbx_yourPhoneNumber='#qrcodePhone';
const lbl_error='.has-danger .error-text'; 

class PhonePage extends HomePage {
    
    constructor() {
        super()
      }

submitPhoneNumber(text){
        const qrCodeEmail=cy.get(tbx_yourPhoneNumber);
        qrCodeEmail.clear();
        qrCodeEmail.type(text)
    }

    getErrorCode(){
        const lblErrorCode_content=cy.get(lbl_error);
        return lblErrorCode_content
    }
}
export default PhonePage;