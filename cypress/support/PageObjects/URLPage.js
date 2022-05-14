import HomePage from "./CommonPage.js";

const txt_qrcode='#qrcodeUrl';
const lbl_error='.has-danger .error-text';

class URLPage extends HomePage {
    
    constructor() {
        super()
      }

    clearQRCodeTextBox(){
        const txt_qrCode=cy.get(txt_qrcode);
        txt_qrCode.clear();
    }

    submitQRCode(qrCode_url){
        const txt_qrCode=cy.get(txt_qrcode);
        txt_qrCode.clear();
        txt_qrCode.type(qrCode_url)
    }

    getErrorCode(){
        const lblErrorCode_content=cy.get(lbl_error);
        return lblErrorCode_content
    }


}
export default URLPage;