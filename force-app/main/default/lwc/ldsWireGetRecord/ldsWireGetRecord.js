import { LightningElement, api, wire} from 'lwc';
import { getRecord,getFieldValue } from 'lightning/uiRecordApi';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name'; //to tell the getRecord to which fields to retrieve
import INDUSTRY from '@salesforce/schema/Account.Industry';

export default class LdsWireGetRecord extends LightningElement {
    //to get recordid in lwc use public decorator @api
    @api recordId;
    data;
    error;
    @wire(getRecord,{recordId:'$recordId',fields:[ACCOUNT_NAME,INDUSTRY]})
    wiredAccount({data,error}){
        console.log()
        if(data){
            this.data=data;
            this.error=undefined;
        }
        else if(error){
            this.error=error;
            this.data=undefined;
        }
    }
    get name(){
        return getFieldValue(this.data,ACCOUNT_NAME);
    }
    get Industry(){
        let output = 'not loaded yet...';
        if(this.data && this.data.fields){
            output=this.data.fields.Industry.value;
        }
        return output;
    }
}