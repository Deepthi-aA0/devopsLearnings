import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_NUMBER from '@salesforce/schema/Account.AccountNumber';
import REVENUE from '@salesforce/schema/Account.AnnualRevenue';

export default class LdsRecordForm extends LightningElement {
    objectApiName = ACCOUNT_OBJECT;
    fields=[NAME,ACCOUNT_NUMBER,REVENUE];
    handleSuccess(event){
        const toastEvent = new ShowToastEvent({
            title: "Account created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}