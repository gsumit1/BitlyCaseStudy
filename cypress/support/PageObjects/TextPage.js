import HomePage from "./CommonPage.js";

const tbx_qrCodeEmail='#qrcodeEmail';
const tbx_subject='#qrcodeEmailSubject'
const tbx_body='#qrcodeEmailMessage'

class TextPage extends HomePage {
    
    constructor() {
        super()
      }

    submitEmail(email, subject, body){
        const qrCodeEmail=cy.get(tbx_qrCodeEmail);
        qrCodeEmail.clear();
        qrCodeEmail.type(email)

        const subjecttbx=cy.get(tbx_subject);
        
        subjecttbx.clear();
        subjecttbx.type(subject)
        
        const bodytbx=cy.get(tbx_body);

        bodytbx.clear();
        bodytbx.type(body)
    }


}
export default TextPage;