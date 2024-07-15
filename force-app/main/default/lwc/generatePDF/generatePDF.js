import { LightningElement } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import JS_PDF from '@salesforce/resourceUrl/jsPDFLibrary';

export default class GeneratePDF extends LightningElement {

    renderedCallback() {
        Promise.all([
            loadScript(this, JS_PDF + '/jspdf.umd.min.js')
        ])
        .then(() => {
            // Script loaded successfully
        })
        .catch(error => {
            console.error('Error loading jsPDF:', error);
        });
    }

    handleGeneratePDF() {
        console.log('clicked generatePdf')
        const pdf = new jsPDF();
        console.log('pdf'+pdf);
        pdf.text('Hello, this is a PDF!', 10, 10);
        pdf.save('document.pdf');
	}
}