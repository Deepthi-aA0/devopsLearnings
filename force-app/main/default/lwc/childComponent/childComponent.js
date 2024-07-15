import { LightningElement,api } from 'lwc';

export default class ChildComponent extends LightningElement {
    msg;
    something;
    @api msgToShow (strMsg)
    {
        this.msg=strMsg;
    }

    handleSomething(event){
        this.something=event.target.value;
        this.dispatchEvent(new CustomEvent('handlesomething', { detail: this.something }));
    }    

    messageInChild(){
        const event = new CustomEvent('handlechildmessage', { detail: 'Message from child to parent' });
        this.dispatchEvent(event);
    }
}