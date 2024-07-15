import { LightningElement } from 'lwc';

export default class ParComponent extends LightningElement {
    textMsg;
    someMessage;
    handleChange(event){
        this.template.querySelector('c-child-component').msgToShow(event.target.value);
    }
    handleSomeChange(event){
        this.someMessage = event.detail;
    }
    handleMessage(event){
        this.textMsg = event.detail;
    }
}