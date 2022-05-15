import HomePage from "./CommonPage.js";

const tbx_yourText='#qrcodeText';
const lbl_error='.has-danger .error-text'; 

class TextPage extends HomePage {
    
    constructor() {
        super()
      }

submitText(text){
        const qrCodeEmail=cy.get(tbx_yourText);
        qrCodeEmail.clear();
        qrCodeEmail.type(text)
    }

getErrorCode(){
        const lblErrorCode_content=cy.get(lbl_error);
        return lblErrorCode_content
    }
}
export default TextPage;